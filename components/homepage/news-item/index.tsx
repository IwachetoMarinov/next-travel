import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { newsitemInterface } from "@/interfaces/homepage/newsInterface";

export function NewsItem({ item }: { item: newsitemInterface }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{item?.name}</CardTitle>
        <CardDescription>{item?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">{item?.username}</div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
