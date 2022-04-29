import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Custom404 from "pages/404";
import React, { ReactElement } from "react";
import { useIntl } from "react-intl";

import { Layout, PageHero, ProductCollection } from "@/components";
import { CollectionPageSeo } from "@/components/seo/CollectionPageSeo";
import { SortTable } from "@/components/SortTable";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import { collectionPaths } from "@/lib/ssr/collection";
import {
  CollectionBySlugDocument,
  CollectionBySlugQuery,
  CollectionBySlugQueryVariables,
} from "@/saleor/api";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  console.log("CollectionPage context:", JSON.stringify(context));

  const collectionSlug = context.params?.slug?.toString()!;
  const response: ApolloQueryResult<CollectionBySlugQuery> = await apolloClient.query<
    CollectionBySlugQuery,
    CollectionBySlugQueryVariables
  >({
    query: CollectionBySlugDocument,
    variables: {
      slug: collectionSlug,
      ...contextToRegionQuery(context),
    },
  });

  return {
    props: {
      collection: response.data.collection,
    },
  };
};

function CollectionPage({ collection }: InferGetStaticPropsType<typeof getStaticProps>) {
  const t = useIntl();
  if (!collection) {
    return <Custom404 />;
  }
  return (
    <>
      <CollectionPageSeo collection={collection} />
      <header className="mb-4 pt-4">
        <div className="max-w-7xl mx-auto px-8">
          <PageHero entity={collection} />
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto px-8 mb-4">
          <div className="flex justify-between mb-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 pb-4">
              {/* {t.formatMessage(messages.titleCollection)} */}
              {collection.name}
            </h1>
            <SortTable />
          </div>

          <ProductCollection filter={{ collections: [collection?.id] }} />
        </div>
      </main>
    </>
  );
}

export default CollectionPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await collectionPaths();
  return {
    paths,
    fallback: "blocking",
  };
};

CollectionPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
