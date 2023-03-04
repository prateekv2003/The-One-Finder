"use client";
import React from "react";
import dynamic from "next/dynamic";

type Props = {};

const DynamicAppWithNoSSR = dynamic(
  () => import("../../../components/StreamChat"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);

const page = (props: Props) => {
  return <DynamicAppWithNoSSR />;
};

export default page;
