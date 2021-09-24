import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;
const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;

const ButtonText = styled.Text`
  color: #fff;
`;

const StarterIntro = ({navigation}) => {
  const start = () => {
    navigation.navigate('StarterName');
  };

  return (
    <Container>
      <WelcomeText>Bem vindo ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          bgcolor="#0072C0"
          underlayColor="#0B7AC6"
          onPress={start}>
          <ButtonText>Iniciar Configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};

StarterIntro.navigationOptions = {
  header: null,
};

export default StarterIntro;
