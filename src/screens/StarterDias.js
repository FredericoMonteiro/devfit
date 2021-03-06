import React, { useState } from 'react';
import {Text, Button} from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex: 1;
    alignItems:center;
    backgroundColor:#FFF;
    paddingLeft:30px;
    paddingRight: 30px; 
    paddingTop:50px;

`;

const HeaderText = styled.Text`
    fontSize:15px;
    color:#333;
    marginBottom:30px;
    text-align:center;
`;
const DaysArea = styled.View`
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-between;
`;


const NextButton = styled.Button``;


const Page = (props) => {

    //Novo
    const [days, setDays] = useState([]);

    const addDay = (d) => {
        let newDays = [...days];
        if(!newDays.includes(d)) {
            newDays.push(d);
        } else {
            newDays = newDays.filter(i=>i!=d);
        }
        setDays(newDays);
        props.setWorkoutDays(newDays);
        props.navigation.setParams({days:newDays});
    }
    

    let firstName = props.name.split(' ')[0];

    

    return (
        <Container>
            <HeaderText>Ola <Text style={{fontWeight:'bold'}}>{firstName}</Text>, tudo bem?</HeaderText>
            <HeaderText>Quais <Text style={{fontWeight:'bold'}}>dias da semana</Text> queres treinar?</HeaderText>

            <DaysArea>
                <DefaultButton onPress={()=>addDay(1)} bgColor={days.includes(1)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Segunda</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(2)} bgColor={days.includes(2)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Terça</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(3)} bgColor={days.includes(3)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Quarta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(4)} bgColor={days.includes(4)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Quinta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(5)} bgColor={days.includes(5)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Sexta</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(6)} bgColor={days.includes(6)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Sábado</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>addDay(0)} bgColor={days.includes(0)?'#a5e8bc':false} width="100px" style={{marginBottom:20}} underlayColor="#CCC">
                    <Text>Domingo</Text>
                </DefaultButton>
            </DaysArea>

            <HeaderText>Podes alterar isto a qualquer momento.</HeaderText>
            
        </Container>
    );
}

Page.navigationOptions = ({navigation}) => {

    const NextButton = (props) => {

        const nextAction = () => {
            if(!props.navigation.state.params || !props.navigation.state.params.days.length) {
                alert("Tens de treinar pelo menos 1 dia");
                return;
            }
            props.navigation.navigate('StarterNivel');
        }
    
        return (
            <Button title="Próximo" onPress={nextAction} />
        );
    }


    return {
        title:'',
        headerRight:() => <NextButton navigation={navigation} />,
        headerRightContainerStyle:{
            marginRight:10
        }
    };
}
const mapStateToProps = (state) => {
    return {
        name:state.userReducer.name,
        workoutDays: state.userReducer.workoutDays
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setName:(name) => dispatch({type:'SET_NAME', payload:{name}}),
        setWorkoutDays: (workoutDays)=>dispatch({type:'SET_WORKOUTDAYS', payload: {workoutDays}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);