import {
  EventCheckmateInterface,
  EventSidebarDataInteface,
  EventSidebarInteface,
} from "@/interfaces/EventInterface";

export const mapNews = (news: any) => {
  return news.map((item: any) => {
    return {
      _id: item._id,
      title: item.title || "",
      date: item.date || new Date().toISOString(),
      image: item.image?.asset?.url || "",
      href: `/news/${item._id}` || "",
      shortDescription: item.short_description || "",
    };
  });
};

export const mapEvents = (events: any, type: string) => {
  // let filteredEvents = events.filter(
  //   (item: any) => new Date(item.date) > new Date()
  // );
  // let defaultHref = "/event/";

  // if (type === "blog") {
  //   filteredEvents = events.filter(
  //     (item: any) => new Date(item.date) < new Date()
  //   );
  //   defaultHref = "/blog/";
  // }

  const filteredEvents = events.filter((item: any) =>
    type === "event"
      ? new Date(item.date) > new Date()
      : new Date(item.date) < new Date()
  );
  const defaultHref = type === "event" ? "/event/" : "/blog/";

  return filteredEvents.map((item: any) => {
    return {
      _id: item._id,
      title: item.title || "",
      date: item.date || new Date().toISOString(),
      image: item.image?.asset?.url || "",
      href: `${defaultHref}${item._id}` || "",
      shortDescription: item.short_description || "",
    };
  });
};

export const mapEventsToCheckmate = (events: any, type: "blog" | "event") => {
  if (!events?.length) return [];

  const filteredEvents = events.filter((item: any) =>
    type === "event"
      ? new Date(item.date) > new Date()
      : new Date(item.date) < new Date()
  );
  const defaultHref = type === "event" ? "/event/" : "/blog/";

  return filteredEvents.map((item: any): EventCheckmateInterface => {
    return {
      date: item.date || "",
      title: item.title || "",
      link: item?._id ? `${defaultHref}${item._id}` : "",
      description: item.short_description || "",
      author: item.author || "Ивайло Маринов",
      mainImage: {
        src: item.image?.asset?.url || "",
        alt: item.image?.alt || "",
      },
      images: item.images || [],
      button: {
        text: "Прочети повече",
        link: `${defaultHref}${item._id}`,
      },
    };
  });
};

export const getSideBarData = (data: any): EventSidebarInteface => {
  return {
    date: data.date || new Date().toISOString(),
    price: data?.priceContent?.[0]?.price || 0,
    difficulty: data?.difficulty ? +data?.difficulty : 1,
    location: data?.location || "",
    type: data?.typeTransition || "",
    duration: data?.duration || "",
  };
};

export const sideBarDataToArray = (
  data: EventSidebarInteface
): EventSidebarDataInteface[] => {
  return [
    {
      title: "Дата",
      icon: "calendar",
      value: data.date,
    },
    {
      title: "Цена",
      icon: "money",
      value: data.price,
    },
    {
      title: "Трудност",
      icon: "star",
      value: data.difficulty,
    },
    {
      title: "Местоположение",
      icon: "location",
      value: data.location,
    },
    {
      title: "Тип",
      icon: "event",
      value: data.type,
    },
    {
      title: "Продължителност",
      icon: "clock",
      value: data.duration,
    },
  ];
};
