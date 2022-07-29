import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  background-color: #1d2528;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const InputArea = styled.View`
  width: 90%;
  padding: 30px;
`

export const CustomButton = styled.TouchableOpacity`
  height: 50px;
  background-color: #b1111f;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`
export const CustomButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 20px;
`
export const SignMessageButtonText = styled.Text`
  font-size: 15px;
  color: #cecece;
`
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #eee;
  font-weight: bold;
  margin-left: 5px;
`
