import React from 'react'

import styled from 'styled-components'

const ComboBox = () => {
  return (
    <Select>
      <Options>Selecciona uno</Options>
      <Options>1</Options>
      <Options>2</Options>
      <Options>3</Options>
      <Options>4</Options>
    </Select>
  )
}

export default ComboBox

const Select = styled.select`
  min-height: 35px;
  width: 40%;
  border-radius: 5px;
  border: 2px solid #779D9F;
  font-size: 16px;
  font-style: normal;
  text-align: end;
  padding: 3px 12px;
  min-width: 175px;
`
const Options = styled.option`
  
`