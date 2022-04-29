import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Custom404 from "pages/404";
import React, { ReactElement, useState } from "react";

import { Layout, PageHero, ProductCollection } from "@/components";
import { CategoryPageSeo } from "@/components/seo/CategoryPageSeo";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import { categoryPaths } from "@/lib/ssr/category";
import {
  CategoryBySlugDocument,
  CategoryBySlugQuery,
  CategoryBySlugQueryVariables,
  ProductOrder,
} from "@/saleor/api";
import { OrderDirectionEnum, ProductOrderFieldEnum } from "graphql/types.generated";
import { ListOptionOrder, SortTable } from "@/components/SortTable/SortTable";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const categorySlug = context.params?.slug?.toString()!;
  const response: ApolloQueryResult<CategoryBySlugQuery> = await apolloClient.query<
    CategoryBySlugQuery,
    CategoryBySlugQueryVariables
  >({
    query: CategoryBySlugDocument,
    variables: {
      slug: categorySlug,
      locale: contextToRegionQuery(context).locale,
    },
  });
  return {
    props: {
      category: response.data.category,
    },
  };
};

function CategoryPage({ category }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [productOrder, setProductOrder] = useState<ProductOrder>({
    direction: OrderDirectionEnum.ASC,
    field: ProductOrderFieldEnum.NAME,
  });

  const onSort = (sortBy: ListOptionOrder): void => {
    const newProductOrder = { ...productOrder };

    switch (sortBy) {
      case ListOptionOrder.NAME_ASC:
        newProductOrder.direction = OrderDirectionEnum.ASC;
        newProductOrder.field = ProductOrderFieldEnum.NAME;
        break;

      case ListOptionOrder.NAME_DESC:
        newProductOrder.direction = OrderDirectionEnum.DESC;
        newProductOrder.field = ProductOrderFieldEnum.NAME;
        break;

      case ListOptionOrder.PRICE_ASC:
        newProductOrder.direction = OrderDirectionEnum.ASC;
        newProductOrder.field = ProductOrderFieldEnum.PRICE;
        break;

      case ListOptionOrder.PRICE_DESC:
        newProductOrder.direction = OrderDirectionEnum.DESC;
        newProductOrder.field = ProductOrderFieldEnum.PRICE;
        break;

      default:
        break;
    }

    setProductOrder(newProductOrder);
  };

  if (!category) {
    return <Custom404 />;
  }
  return (
    <>
      <CategoryPageSeo category={category} />
      <header className="mb-4 pt-4">
        <div className="max-w-7xl mx-auto px-8">
          <PageHero entity={category} />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between mb-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 pb-4">
              {category.name}
            </h1>
            <SortTable onSort={onSort} />
          </div>
          <ProductCollection filter={{ categories: [category?.id] }} sortBy={productOrder} />
        </div>
      </main>
    </>
  );
}

export default CategoryPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await categoryPaths();
  return {
    paths,
    fallback: "blocking",
  };
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
