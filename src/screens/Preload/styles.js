import React from 'react'
import styled from 'styled-components'
import { ActivityIndicator } from 'react-native'

export const Container = styled.SafeAreaView`
  background-color: #1d2528;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const LoadingIcon = styled.ActivityIndicator`
  margin-top: -30px;
`
