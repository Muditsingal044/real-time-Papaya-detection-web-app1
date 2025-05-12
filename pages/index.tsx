import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { withAuth } from "../components/withAuth";

function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center  w-screen">
        <h1 className="m-5 text-xl font-bold">Real-Time Papaya Detection</h1>
        <Yolo />
        <p className="m-5">
          Created by{" "}
          <a
            className="underline underline-offset-1 hover:translate-y-1"
            href="https://juanjaho.github.io/"
          >
            @MuditSingal
          </a>
        </p>
      </main>
    </>
  );
}

export default withAuth(Home);
