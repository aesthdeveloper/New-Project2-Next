import React from 'react'
import Head from 'next/head'

import AppComponent from '../components/component'

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>New Project2</title>
          <meta property="og:title" content="New Project2" />
        </Head>
        <AppComponent rootClassName="rootClassName"></AppComponent>
        <div className="home-container1">
          <input type="text" placeholder="placeholder" className="input" />
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default Home
