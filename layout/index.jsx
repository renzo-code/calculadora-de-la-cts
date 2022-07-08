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
        <link rel="canonical" href="https://especiales.larepublica.pe/economia/peru/gratificacion-de-julio-2022-quienes-seran-beneficiarios-cuanto-es-cuando-pagan-y-todo-lo-que-debes-saber" />
        <title>
          Gratificación 2022: Aquí LINK de quienes serán beneficiarios, cuánto es, cuándo pagan la grati y todo 
          lo que debes saber | Calculadora gratificacion | Pago de Grati | gratificación | Peru | larepublica.pe
        </title>
        <meta 
          name="description" 
          content="La gratificación es una remuneración adicional que percibe el trabajador en julio por Fiestas 
          Patrias y en diciembre por Navidad. Calcula AQUÍ el pago correspondiente."
        />
        <meta 
          name="keywords" 
          content="economia, peru, gratificación, calcular gratificacion, fiestas patrias, calcular gratificacion, Gratificación 
          julio 2022,Gratificación 2022,La grati,Grati 2022,Empresas,Trabajadores, Gratificación de julio"
        />
        <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="robots" content="max-image-preview:large"/>
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Gratificación 2022: quiénes serán beneficiarios, cuánto es, cuándo pagan la grati y todo lo que debes saber"/>
        <meta name="twitter:description" content="La gratificación es una remuneración adicional que percibe el trabajador en julio por Fiestas Patrias y en diciembre por Navidad." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2022/07/08/lg_62c8594070e594175737f12c.jpg" />
        <meta name="twitter:url" content="https://especiales.larepublica.pe/economia/peru/gratificacion-2022-quienes-seran-beneficiarios-cuanto-es-cuando-pagan-y-todo-lo-que-debes-saber" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2022/07/08/lg_62c8594070e594175737f12c.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Gratificación 2022: quiénes serán beneficiarios, cuánto es, cuándo pagan la grati y todo lo que debes saber"/>
        <meta property="og:description" content="La gratificación es una remuneración adicional que percibe el trabajador en julio por Fiestas Patrias y en diciembre por Navidad."/>
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2022/07/08/lg_62c8594070e594175737f12c.jpg"/>
        <meta property="og:url" content="https://especiales.larepublica.pe/economia/peru/gratificacion-2022-quienes-seran-beneficiarios-cuanto-es-cuando-pagan-y-todo-lo-que-debes-saber" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828"/>
        <meta property="og:image:height" content="450"/>
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845"/>
        <meta property="fb:app_id" content="602624269799095"/>
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