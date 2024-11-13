export const mapNews = (news: any) => {
  return news.map((item: any) => {
    return {
      _id: item._id,
      title: item.title || "",
      image: item.image?.asset?.url || "",
      href: `/news/${item._id}` || "",
      shortDescription: item.short_description || "",
    };
  });
};

export const mapEvents = (events: any, type: string) => {
  let filteredEvents = events.filter(
    (item: any) => new Date(item.date) > new Date()
  );
  let defaultHref = "/event/";

  if (type === "blog") {
    filteredEvents = events.filter(
      (item: any) => new Date(item.date) < new Date()
    );
    defaultHref = "/blog/";
  }

  return filteredEvents.map((item: any) => {
    return {
      _id: item._id,
      title: item.title || "",
      image: item.image?.asset?.url || "",
      href: `${defaultHref}${item._id}` || "",
      shortDescription: item.short_description || "",
    };
  });
};
