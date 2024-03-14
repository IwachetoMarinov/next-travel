import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data;
}

export const getDatabase = async (databaseName: string) => {
  console.log("db", databaseName);

  try {
    const news: any = [];
    const unsub = onSnapshot(collection(db, databaseName), (doc) => {
      doc.forEach((d: any) => {
        news.push({ ...d.data(), id: d.id });
      });
    });

    return news;
  } catch (err) {
    console.error(err);
  }
};

export const addNew = async (
  name: string,
  description: string,
  short_description: string,
) => {
  try {
    await addDoc(collection(db, "news"), {
      name,
      description,
      short_description,
    });
  } catch (err) {
    console.error(err);
  }
};
