"use client";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ClientComponent({ children }: Props) {
  return <>{children}</>;
}
