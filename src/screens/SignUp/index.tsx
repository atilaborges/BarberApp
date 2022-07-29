import React, { useState } from 'react'
import { UserContext } from '../../contexts/UserContext';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles';
import SignInput from '../../components/SignInput'
import Api from '../../Api';

import { Text } from 'react-native';

import BarberLogo from '../../assets/barber-svg.svg';
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import userIcon from '../../assets/user.svg'

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (nameField != '' && emailField != '' && passwordField != '') {
      let res = await Api.signUp(nameField, emailField, passwordField);

      if (res.token) {
        await AsyncStorage.setItem('token', res.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: res.data.avatar
          }
        });

        navigation.reset({
          routes: [{ name: 'MainTab' }]
        });

      } else {
        alert("Error: " + res.error);
      }

    } else {
      alert("Preencha os campos.");
    }

  }
  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }


  return (
    <Container>
      <BarberLogo width="100%" height="60%" />

      <InputArea>
        <SignInput
          IconSvg={userIcon}
          placeholder="Digite seu Nome"
          value={nameField}
          onChangeText={(t: React.SetStateAction<string>) => setNameField(t)} password={undefined} />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t: React.SetStateAction<string>) => setEmailField(t)} password={undefined} />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t: React.SetStateAction<string>) => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça seu Login.</SignMessageButtonTextBold>

      </SignMessageButton>

    </Container>
  );
};