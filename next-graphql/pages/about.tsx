import React from "react";
import { NextPage,NextPageContext,GetStaticProps} from "next";
import Link from 'next/link'
type Props ={
    open:boolean,
    subreddit:string
}

const About: NextPage<Props> = ({open,subreddit}) => {
  return <nav className="text-center">
  <ul className="flex justify-between px-4 my-4 py-1">
    <li className="flex px-2 py-1">
        {
            open&& <Link href="/">
            <a className="text-blue-500 no-underline text-sm">{subreddit}</a>
          </Link>
        }
     
    </li>
  </ul>
  </nav>;
};


export const getStaticProps:GetStaticProps=async(context)=> {
       
    const subreddit='typescript'
    return {
      props: {
          subreddit
      }, // will be passed to the page component as props
    }
  }

export default About;
