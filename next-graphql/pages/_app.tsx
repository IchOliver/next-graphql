
import React ,{useState} from 'react'
import "tailwindcss/tailwind.css";

import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  const [open,setOpen] =useState(true)
  return <Component {...pageProps} open={open} />
}

App.getInitialProps = async(context)=>{
  return{
      
  }
}
export default App