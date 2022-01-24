import React from 'react'

import Layout from '../layout'
import styled from 'styled-components'
import { LineDate, LineComboBox } from '../components/LineDate'

const Home = () => {
  return (
    <Layout>
      <ContainerTitle>
        <Title>
          CALCULADORA DE GRATIFICACIÓN
        </Title>
      </ContainerTitle>
      <ContainerBody>
        <LineDate
          type="date"
          title="Fecha de Ingreso"
        />
        <LineDate
          type="text"
          title="Sueldo Bruto"
          placeholder="S/. 0.00"
        />
        <LineDate
          type="number"
          title="Tiempo laboral computable (meses)"
          disabled="true"
          value="0"
        />
        <LineComboBox
          title="Bono Extraordinario"
        />
        <LineComboBox
          title="Con hijo(s) (Bonificación familiar)"
        />
        <Line/>
        <LineDate
          type="number"
          title="Total a recibir"
          disabled="true"
          value="0"
        />
        <Footer>

        </Footer>
      </ContainerBody>
    </Layout>
  )
}

export default Home

const ContainerTitle = styled.div`
  width: 100%;
  background-color: red;
  height: 50px;
  line-height: 50px;
  margin: 0 auto 20px;

  @media (max-width: 520px){
    margin: 0 auto 15px;
  }
`
const Title = styled.h1`
  font-family: Roboto-Bold;
  font-size: 25px;
  text-align: center;
  color: white;
  height: auto;

  @media (max-width: 600px){
    font-size: 22px;
  }
  @media (max-width: 520px){
    font-size: 18px;
  }
  @media (max-width: 420px){
    font-size: 15px;
  }
`
const ContainerBody = styled.div`
  /* background-color: blue; */
  height: 100%;
  width: 100%;
`
const Line = styled.div`
  height: 3px;
  background-color: #9A9A9A;
  width: 90%;
  margin: 15px auto 20px;
  
  @media (max-width: 560px){
    width: 100%;
  }
`
const Footer = styled.div`
  margin-top: 30px;
  background-color: #4D4D4D;
  height: 45px;
  width: 100%;
  background-image: url("https://cdn.larepublica.pe/images/content/default/logo-lr.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 160px;
  object-fit: cover;

  @media (max-width: 520px){
    background-size: 120px;
    margin-top: 20px;
  }
`