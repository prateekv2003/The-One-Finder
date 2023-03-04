"use client";
import React, { useState, useEffect } from "react";
import Recs from "../../components/Recs";
import IMG from "../../public/dinesh.jpg";
type Props = {};

const Page = (props: Props) => {
  return (
    <div className="app">
      <Recs />
      
    </div>
  );
};

export default Page;
