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

export const mapEvents = (events: any) => {
  return events.map((item: any) => {
    return {
      _id: item._id,
      title: item.title || "",
      image: item.image?.asset?.url || "",
      href: `/event/${item._id}` || "",
      shortDescription: item.short_description || "",
    };
  });
};
