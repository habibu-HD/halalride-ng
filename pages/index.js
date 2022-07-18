/** @format */

import Head from "next/head";
import Carousel from "../components/Carousel";
import { img } from "../data";
import Download from "../components/Download";
import Info from "../components/Info";
import Location from "../components/Location";
import Frame from "../components/layout/Frame";

export default function Home() {
  return (
    <Frame>
      <Head>
        <title>Halal Ride</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='main'>
        <Carousel />
        <Download img={img} />
        <Info />
        <Location />
      </main>
    </Frame>
  );
}
