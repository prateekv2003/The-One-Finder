import React from "react";
import Recs from "../../../components/Recs";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Recs />
    </div>
  );
};

export default Home;
