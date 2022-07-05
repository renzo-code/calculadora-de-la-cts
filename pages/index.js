import React, {useState, useEffect} from 'react'

import Layout from '../layout'
import styled from 'styled-components'
import moment from 'moment'

import LineDate from '../components/LineDate'
import BonoComboBox from '../components/BonoComboBox'
import FamComboBox from '../components/FamComboBox'

const Home = () => {
  const [fecha, setFecha] = useState(null)
  const [sueldo, setSueldo] = useState(null)
  const [diffMeses, setDiffMeses] = useState(null)
  const [resultSB , setResultSB] = useState(null)
  const [resultCBono , setResultCBono] = useState(0)
  const [resultCBonoFam , setResultCBonoFam] = useState(0)
  const [bono, setBono] = useState(null)
  const [fam, setFam] = useState(null)

  const optionsBono = [
    {
      id : 1,
      description : "ESSALUD 9%"
    },
    {
      id: 2,
      description : "EPS 6,75%"
    }
  ]
  
  const optionsFam = [
    {
      id : 1,
      description : "Si"
    },
    {
      id: 2,
      description : "No"
    }
  ]

  const handleInput = (e) => {
    const { value, validity: { valid } } = e.target;
    console.log('valid: ', valid);
    console.log('value: ', value);
    setSueldo(valid ? value : sueldo)
  }

  // const handleInput = (e, fn, state) => {
  //   const { value, validity: { valid }, type } = e.target;
  //   const validated = (valid || type === 'date') ? value : state;
  //   fn(validated);
  // };

  const handleComboBono = (e) => {
    let  value = e.target.value
    setBono(value)
  }
  const handleComboFam = (e) => {
    let  value = e.target.value
    setFam(value)
  }
  
  const hendleFechaIngreso = (e) => {
    let formatDate = moment(e.target.value)
    setFecha(formatDate)
  }

  useEffect (() => {
    setDiffMeses(moment().diff(fecha, "month"))
    console.log('diffMeses', diffMeses)
    if(diffMeses <= 6){
      let bonoEx = 0
      let conFam = 0
      let result = sueldo / 6 * diffMeses
      setResultSB(result)

      if(bono === "1"){
        bonoEx = resultSB * 0.09
      } 
      if(bono === "2") {
        bonoEx = resultSB * 0.0675
      }
      setResultCBono(resultSB + bonoEx)

      if(fam === "1"){
        conFam = resultCBono + 102.5
      }else{
        conFam = resultCBono
      }
        setResultCBonoFam(conFam)
      
    }
  }, [fecha, sueldo, diffMeses, bono, resultSB, resultCBono, fam])
  
  console.log('resultSB', resultSB)
  console.log('sueldo', sueldo)
  console.log('bono', bono)
  console.log('fam', fam)

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
          onChange={(e) => hendleFechaIngreso(e)}
        />
        <LineDate
          type="text"
          title="Sueldo Bruto"
          placeholder="S/. 0.00"
          name="SueldoBruto"
          value={sueldo}
          onInput={(e) => handleInput(e)}
          pattern="[0-9]*"
        />
        <LineDate
          type="number"
          title="Tiempo laboral computable (meses)"
          disabled="true"
          value={diffMeses > 6 ? 6 : diffMeses}
        />
        <BonoComboBox
          placeholder="Selecciona uno"
          title="Bono Extraordinario"
          options={optionsBono}
          onChange={(e) => handleComboBono(e)}
        />
        <FamComboBox
          options={optionsFam}
          placeholder="Selecciona uno"
          title="Con hijo(s) (Bonificación familiar)"
          onChange={(e) => handleComboFam(e)}
        />
        <Line/>
        <LineDate
          type="number"
          title="Total a recibir"
          disabled="true"
          value={resultCBonoFam?.toFixed(2)}
        />
        <Footer/>
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