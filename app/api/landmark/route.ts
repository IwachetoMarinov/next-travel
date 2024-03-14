import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import jsdom from "jsdom";
// const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const url = "https://www.jonas-k.me/articles/";

export async function GET() {
  const greeting = "Hello World!!";
  const json = {
    greeting,
  };

  return NextResponse.json(json);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  let articles: any = [];

  const res = await fetch(url);
  const response = await res.text();

  const dom = new jsdom.JSDOM(response, {
    runScripts: "dangerously",
    virtualConsole: new jsdom.VirtualConsole(),
  });

  const selector = dom.window.document.querySelectorAll(".list a");

  [...selector].forEach((article) => {
    articles.push(article?.textContent);
  });

  return NextResponse.json(articles);
}
