import { ApolloQueryResult } from "@apollo/client";
import { useAuthState } from "@saleor/sdk";
import clsx from "clsx";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Custom404 from "pages/404";
import React, { ReactElement, useState } from "react";
import { useIntl } from "react-intl";

import { Layout, RichText, VariantSelector } from "@/components";
import { AttributeDetails } from "@/components/product/AttributeDetails";
import { ProductGallery } from "@/components/product/ProductGallery";
import { useRegions } from "@/components/RegionsProvider";
import { ProductPageSeo } from "@/components/seo/ProductPageSeo";
import { messages } from "@/components/translations";
import apolloClient from "@/lib/graphql";
import { usePaths } from "@/lib/paths";
import { getSelectedVariantID } from "@/lib/product";
import { useCheckout } from "@/lib/providers/CheckoutProvider";
import { contextToRegionQuery, DEFAULT_LOCALE, localeToEnum } from "@/lib/regions";
import { translate } from "@/lib/translations";
import {
  CheckoutError,
  ProductBySlugDocument,
  ProductBySlugQuery,
  ProductBySlugQueryVariables,
  useCheckoutAddProductLineMutation,
  useCreateCheckoutMutation
} from "@/saleor/api";


export type OptionalQuery = {
  variant?: string;
};
export const getStaticPaths: GetStaticPaths = async () =>
// Temporally do not render all possible products during the build time
// const paths = await productPaths();
({
  paths: [],
  fallback: "blocking",
});
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const productSlug = context.params?.slug?.toString()!;
  const response: ApolloQueryResult<ProductBySlugQuery> = await apolloClient.query<
    ProductBySlugQuery,
    ProductBySlugQueryVariables
  >({
    query: ProductBySlugDocument,
    variables: {
      slug: productSlug,
      ...contextToRegionQuery(context),
    },
  });
  return {
    props: {
      product: response.data.product,
    },
    revalidate: 60, // value in seconds, how often ISR will trigger on the server
  };
};
function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const paths = usePaths();
  const t = useIntl();
  const { currentChannel, formatPrice } = useRegions();
  const [quantity, setQuantity] = useState<number>(1);

  const { checkoutToken, setCheckoutToken, checkout } = useCheckout();


  const [createCheckout] = useCreateCheckoutMutation();
  const { user } = useAuthState();
  const locale = router.query.locale?.toString() || DEFAULT_LOCALE;

  const [addProductToCheckout] = useCheckoutAddProductLineMutation();
  const [loadingAddToCheckout, setLoadingAddToCheckout] = useState(false);
  const [addToCartError, setAddToCartError] = useState("");

  if (!product?.id) {
    return <Custom404 />;
  }

  const selectedVariantID = getSelectedVariantID(product, router);

  const selectedVariant = product?.variants?.find((v) => v?.id === selectedVariantID) || undefined;

  const onAddToCart = async () => {
    // Clear previous error messages
    setAddToCartError("");

    // Block add to checkout button
    setLoadingAddToCheckout(true);
    const errors: CheckoutError[] = [];

    if (!selectedVariantID) {
      return;
    }

    if (checkout) {
      // If checkout is already existing, add products
      const { data: addToCartData } = await addProductToCheckout({
        variables: {
          checkoutToken,
          variantId: selectedVariantID,
          locale: localeToEnum(locale),
          quantity
        },
      });
      addToCartData?.checkoutLinesAdd?.errors.forEach((e) => {
        if (e) {
          errors.push(e);
        }
      });
    } else {
      // Theres no checkout, we have to create one
      const { data: createCheckoutData } = await createCheckout({
        variables: {
          email: user?.email || "anonymous@example.com",
          channel: currentChannel.slug,
          lines: [
            {
              quantity: 1,
              variantId: selectedVariantID,
            },
          ],
        },
      });
      createCheckoutData?.checkoutCreate?.errors.forEach((e) => {
        if (e) {
          errors.push(e);
        }
      });
      if (createCheckoutData?.checkoutCreate?.checkout?.token) {
        setCheckoutToken(createCheckoutData?.checkoutCreate?.checkout?.token);
      }
    }
    // Enable button
    setLoadingAddToCheckout(false);

    if (errors.length === 0) {
      // Product successfully added, redirect to cart page
      router.push(paths.cart.$url());
      return;
    }

    // Display error message
    const errorMessages = errors.map((e) => e.message || "") || [];
    setAddToCartError(errorMessages.join("\n"));
  };

  const isAddToCartButtonDisabled =
    !selectedVariant || selectedVariant?.quantityAvailable === 0 || loadingAddToCheckout;

  const description = translate(product, "description");

  const price = selectedVariant?.pricing?.price?.gross || product.pricing?.priceRange?.start?.gross;

  const renderRating = (ratings: number) => {
    const rateComponent = Array(Math.floor(ratings)).fill(1).map(() => (
      <svg  className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    ))
    const withoutRate = 5 - Math.floor(ratings);
    if(!withoutRate){
      return <> </>
    }

    const withoutRateComponent = Array(Math.floor(withoutRate)).fill(1).map(() => (
      <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    ))

    return (
      <div className="flex items-center">
        {rateComponent}
        {withoutRateComponent}
    </div>
    )

  }

  return (
    <>
      <ProductPageSeo product={product} />
      <main
        className={clsx(
          "grid grid-cols-1 gap-4 max-h-full overflow-auto md:overflow-hidden max-w-7xl mx-auto pt-8 px-8 md:grid-cols-3"
        )}
      >
        <div className="col-span-2">
          <ProductGallery product={product} selectedVariant={selectedVariant} />
        </div>
        <div className="mt-10 space-y-8 md:mt-0">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">
              {translate(product, "name")}
            </h1>
            {price && (
              <h2 className="text-xl font-bold tracking-tight text-gray-800">
                {formatPrice(price)}
              </h2>
            )}
            {!!product.category?.slug && (
              <Link href={paths.category._slug(product?.category?.slug).$url()} passHref>
                <p className="mt-2 text-lg font-medium text-gray-600 cursor-pointer">
                  {translate(product.category, "name")}
                </p>
              </Link>
            )}
          </div>

          <VariantSelector product={product} selectedVariantID={selectedVariantID} />

          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value)}
            value={quantity}
            className="shadow appearance-none border rounded w-[3.5rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number" />

          {renderRating(product.rating!)}

          <p className="text-base">Stock: <span className="font-bold">{product.variants![0]?.quantityAvailable}</span> products</p>

          <button
            onClick={onAddToCart}
            type="submit"
            disabled={isAddToCartButtonDisabled}
            className={clsx(
              "w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-white hover:bg-blue-700 focus:outline-none",
              isAddToCartButtonDisabled && "bg-gray-400 hover:bg-gray-400"
            )}
          >
            {loadingAddToCheckout
              ? t.formatMessage(messages.adding)
              : t.formatMessage(messages.addToCart)}
          </button>

          {!selectedVariant && (
            <p className="text-yellow-600 text-lg-">{t.formatMessage(messages.variantNotChosen)}</p>
          )}

          {selectedVariant?.quantityAvailable === 0 && (
            <p className="text-yellow-600 text-lg-">{t.formatMessage(messages.soldOut)}</p>
          )}

          {!!addToCartError && <p>{addToCartError}</p>}

          {description && (
            <div className="space-y-6 text-base text-gray-700">
              <RichText jsonStringData={description} />
            </div>
          )}

          <AttributeDetails product={product} selectedVariant={selectedVariant} />
        </div>
      </main>
    </>
  );
}

export default ProductPage;

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
