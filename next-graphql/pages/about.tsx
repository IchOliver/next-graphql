import React from "react";
import {
  NextPage,
  NextPageContext,
  GetStaticProps,
  GetServerSideProps,
} from "next";
import Link from "next/link";
type Props = {
  open: boolean;
  subreddit: string;
};

const About: NextPage<Props> = ({ open, subreddit }) => {
  return (
     <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">

     </nav>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // request data fetch api
  const request = context.req;
  const host =
    typeof window !== "undefined"
      ? window.location.host || ""
      : request.headers.host;
  const protocol = host.includes("localhost") ? "http" : "https";
  const subreddit = protocol;
  return {
    props: {
      subreddit,
    }, // will be passed to the page component as props
  };
};

export default About;
