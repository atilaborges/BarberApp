import React from 'react'
import styled from 'styled-components/native'

const InputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: #5678;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`
const Input = styled.TextInput`
flex:10;
font-size:15px
color: #fff;
margin-left:18px;
`

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#F8FFED" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  )
}
