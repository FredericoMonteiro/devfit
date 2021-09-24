import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import DefaultButton from '../../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
  margin-right: 30px;
`;

const HeaderText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const InputName = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const NextButton = styled.Button``;

const StarterName = ({name, navigation, setName}) => {
  const nextActions = () => {
    if (!name) {
      alert('Precisas de um nome!');
      return;
    }

    navigation.navigate('StarterDias');
  };

  const handlerTextName = newName => {
    setName(newName);
    navigation.setParams({name: newName});
  };

  return (
    <Container>
      <HeaderText>Qual é o teu nome?</HeaderText>
      <InputName
        value={name}
        onChangeText={handlerTextName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextActions}
      />
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
