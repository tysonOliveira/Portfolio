import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-gray-900 bg-app bg-no-repeat bg-cover scrollbar scrollbar-track-black scrollbar-thumb-[#E36125]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}