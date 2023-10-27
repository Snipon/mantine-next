export async function getData<T>(path: string): Promise<T> {
  const res = await fetch(`${process.env.NEXT_API_ENDPOINT}/${path}`, { next: { revalidate: 60 } });
  return await res.json();
}
