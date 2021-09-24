import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import DefaultButton from '../../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const NextButton = styled.Button``;

const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const StarterName = ({name, navigation}) => {
  let firstName = name.split(' ')[0];

  return (
    <Container>
      <HeaderText>
        Ola, <BoldText>{firstName}</BoldText>, tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> queres treinar?
      </HeaderText>
      <DaysArea>
        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Segunda</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Terça</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Quarta</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Quinta</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Sexta</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Sábado</Text>
        </DefaultButton>

        <DefaultButton width="100" style={{marginBottom: 20}}>
          <Text>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

StarterName.navigationOptions = ({navigation}) => {
  const nextActions = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Precisas de um nome!');
      return;
    }

    navigation.navigate('StarterDias');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextActions} />,
    headerRightContainerStyle: {
      marginRight: 20,
    },
  };
};

const mapStateToProps = state => ({
  name: state.UserReducer.name,
});

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarterName);
