"use client";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  });

export default function Home() {
  const { data, error, isLoading, mutate } = useSWR(
    // "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/invalid-url",
    fetcher,
    { refreshInterval: 5000 }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>
        <button onClick={() => mutate()}>ボタン</button>
      </p>
    </div>
  );
}
