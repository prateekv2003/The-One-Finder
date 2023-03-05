import React from "react";
import Recs from "../../../components/Recs";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { getServerSession } from "next-auth/next";
type Props = {};

export default async function Home(props: Props) {
  const session = await getServerSession();
  console.log("client session", session);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Recs />
    </div>
  );
}
