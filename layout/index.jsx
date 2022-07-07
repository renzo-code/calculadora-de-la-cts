import React from 'react'

import NextHead from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = (props) => {
  const { children } = props
  return(
    <>
      <NextHead>
        {/* Metadatos SEO */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        
        {/* Metadatos Twitter */}
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2021/10/14/lg_6168aa194dbe4a0ab457331d.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />

        {/* Metadatos Facebook */}
        <meta property="fb:pages" content="94604237016" />
        <meta property="fb:app_id" content="489210501129201" />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2021/10/14/lg_6168aa194dbe4a0ab457331d.jpg"/>
        <title>Gratificación de julio 2022: quienes serán beneficiarios, cuánto es, 
        cuándo pagan y todo lo que debes saber</title>
      </NextHead>
      <Wrapper>
        <Header/>
        <LayoutContent>
          <LayoutBody>
            { children }
          </LayoutBody>
        </LayoutContent>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: auto;
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`
const LayoutContent = styled.div`
  height:  calc(100vh - 104px);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
`
const LayoutBody = styled.div`
  width: 80%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 500px){
    width: 90%;
  }
`