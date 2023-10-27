import ArticleList from "@/components/ArticleList";
import {getData} from "@/utils/apiFetch";
import {ArticleTypes} from "@/types/Article.types";
import {Loader} from "@mantine/core";
import {Suspense} from "react";
export default async function Home() {
  const data = await getData<ArticleTypes[]>("list");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loader />}>
        <ArticleList data={data} />
      </Suspense>
    </main>
  );
} 
