import { NewsItem } from "@/components/homepage/news-item";

export default function News({ news }: { news: any }) {
  const latestNews = news?.slice(0, 4);

  return (
    <section className="flex justify-center p-5">
      {latestNews.map((item: any, index: number) => (
        <div className="px-2" key={index}>
          <NewsItem
            item={{
              id: item.id,
              name: item.name,
              username: item.username,
              email: item.email,
            }}
          />
        </div>
      ))}
    </section>
  );
}
