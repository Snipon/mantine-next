import {getData} from "@/utils/apiFetch";
import {ArticleTypes} from "@/types/Article.types";
import ArticleView from "@/components/ArticleView";
import {Suspense} from "react";
import {Loader} from "@mantine/core";



interface DetailsPageProps {
  params: {
    id: string;
  }
}

export default async function DetailsPage({params}:DetailsPageProps){
  const {id} = params;
  const data = await getData<ArticleTypes>(`list/${id}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<Loader />}>
        <ArticleView {...data} />
      </Suspense>
    </main>
  );
}


