import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from '../components/DefaultButton';
import ExerciseItemEdit from '../components/ExerciseItemEdit';
import CustomModal from '../components/CustomModal';
import uuid from 'react-native-uuid';

const Container = styled.SafeAreaView`
    flex:1;
    margin:20px;
`;
const NameInput = styled.TextInput`
    border:1px solid #CCC;
    width:100%;
    height:50px;
    borderRadius:10px;
    fontSize:16px;
    padding:10px;
`;

const ExercisesArea = styled.View`
    flex:1;
    marginTop:20px;
    paddingTop:20px;
    borderTopWidth:1px;
    borderTopColor:#CCC;
`;

const ButtonText = styled.Text`
    color:#FFF;
`;

const ExercisesList = styled.FlatList`
    flex:1;
    paddingTop:20px;
`;

const ModalLabel = styled.Text`
    fontSize:15px;
    fontWeight:bold;
    marginTop:10px;
`;
const ModalMucles = styled.ScrollView``;
const ModalInput = styled.TextInput`
    width:100%;
    fontSize:14px;
    color:#333;
    height:40px;
    borderBottomWidth:1px;
    borderBottomColor:#CCC;
`;


const ModalMuscle = styled.TouchableHighlight`
    width:50px;
    height:50px;
    backgroundColor:#EEE;
    borderRadius:10px;
    justifyContent:center;
    alignItems:center;
    marginRight:10px;
    opacity:${props => props.opacity};
`;

const ModalMuscleImage = styled.Image`
    width:35px;
    height:35px;
`;

const ModalExtra = styled.View`
    width:100%;
    flexDirection:row;
    justifyContent:space-between;
    marginBottom:20px;
`;
const ModalExtraItem = styled.View`
    alignItems:center;
`;





const Page = (props) => {

    let workout = (props.navigation.state.params && props.navigation.state.params.workout) ? props.navigation.state.params.workout : false;

    const [name, setName] = useState(workout ? workout.name : '');
    const [id, setId] = useState(workout ? workout.id : '');
    const [exercises, setExercises] = useState(workout ? workout.exercises : []);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalId, setModalId] = useState('');
    const [modalName, setModalName] = useState('');
    const [modalMuscle, setModalMuscle] = useState('');
    const [modalSets, setModalSets] = useState('');
    const [modalLoad, setModalLoad] = useState('');
    const [modalReps, setModalReps] = useState('');


    useEffect(() => {
        props.navigation.setParams({
            workout:{id, name, exercises},
            addWorkout:props.addWorkout,
            editWorkout:props.editWorkout
        });
    }, [name, exercises]);





    const editExercise = (exercise) => {
        setModalVisible(true);
        setModalId(exercise.id);
        setModalName(exercise.name);
        setModalMuscle(exercise.muscle);
        setModalSets(exercise.sets);
        setModalReps(exercise.reps);
        setModalLoad(exercise.load);
    }

    const delExercise = (exercise) => {

        let newExercises = [...exercises];

        newExercises = newExercises.filter(i => i.id != exercise.id);

        setExercises(newExercises);
    }

    const modalSave = () => {
        let newExercises = [...exercises];


        if (modalName == '' || modalMuscle == '' || modalSets == '' || modalReps == '') {
            alert('Preencha todas as informa????es');
            return;
        }

        if (modalId) {

            let index = newExercises.findIndex(i => i.id == modalId);
            if (index > -1) {
                newExercises[index].name = modalName;
                newExercises[index].muscle = modalMuscle;
                newExercises[index].sets = modalSets;
                newExercises[index].reps = modalReps;
                newExercises[index].load = modalLoad;
            }
        } else {
            let ex = {
                id: uuid.v1(),
                name: modalName,
                muscle: modalMuscle,
                sets: modalSets,
                reps: modalReps,
                load: modalLoad
            };

            newExercises.push(ex);
        }
        setExercises(newExercises);
        setModalVisible(false);
    }

    const resetModal = () => {
        setModalId('');
        setModalName('');
        setModalMuscle('');
        setModalSets('');
        setModalReps('');
        setModalLoad('');

    }

    const addExercise = () => {
        resetModal();
        setModalVisible(true);
    }


    return (
        <Container>
            <CustomModal visible={modalVisible} closeAction={() => { setModalVisible(false) }} >
                <ModalLabel>M??sculo de Foco</ModalLabel>
                <ModalMucles horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ModalMuscle
                        opacity={modalMuscle == 'abs' ? 1 : 0.3}
                        onPress={() => setModalMuscle('abs')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/abs.png')} />
                    </ModalMuscle>

                    <ModalMuscle
                        opacity={modalMuscle == 'back' ? 1 : 0.3}
                        onPress={() => setModalMuscle('back')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/back.png')} />
                    </ModalMuscle>

                    <ModalMuscle
                        opacity={modalMuscle == 'biceps' ? 1 : 0.3}
                        onPress={() => setModalMuscle('biceps')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/biceps.png')} />
                    </ModalMuscle>


                    <ModalMuscle
                        opacity={modalMuscle == 'chest' ? 1 : 0.3}
                        onPress={() => setModalMuscle('chest')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require(

                            '../assets/muscles/chest.png')} />
                    </ModalMuscle>

                    <ModalMuscle
                        opacity={modalMuscle == 'gluteos' ? 1 : 0.3}
                        onPress={() => setModalMuscle('gluteos')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/gluteos.png')} />
                    </ModalMuscle>

                    <ModalMuscle
                        opacity={modalMuscle == 'legs' ? 1 : 0.3}
                        onPress={() => setModalMuscle('legs')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/legs.png')} />
                    </ModalMuscle>


                    <ModalMuscle
                        opacity={modalMuscle == 'shoulders' ? 1 : 0.3}
                        onPress={() => setModalMuscle('shoulders')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/shoulders.png')} />
                    </ModalMuscle>

                    <ModalMuscle
                        opacity={modalMuscle == 'triceps' ? 1 : 0.3}
                        onPress={() => setModalMuscle('triceps')}
                        underlayColor="transparent">
                        <ModalMuscleImage source={require('../assets/muscles/triceps.png')} />
                    </ModalMuscle>
                </ModalMucles>

                <ModalLabel>Nome do exerc??cio</ModalLabel>
                <ModalInput value={modalName} onChangeText={e => setModalName(e)} />

                <ModalExtra>
                    <ModalExtraItem>
                        <ModalLabel>S??ries</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalSets} onChangeText={e => setModalSets(e)} />
                    </ModalExtraItem>

                    <ModalExtraItem>
                        <ModalLabel>Repeti????es</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalReps} onChangeText={e => setModalReps(e)} />
                    </ModalExtraItem>

                    <ModalExtraItem>
                        <ModalLabel>Carga</ModalLabel>
                        <ModalInput keyboardType="numeric" value={modalLoad} onChangeText={e => setModalLoad(e)} />
                    </ModalExtraItem>
                </ModalExtra>

                <DefaultButton bgColor="#4AC34E" onPress={modalSave} underlayColor="transparent">
                    <ButtonText>Salvar</ButtonText>
                </DefaultButton>
            </CustomModal>

            <NameInput
                value={name}
                onChangeText={e => setName(e)}
                placeholder=" Digite o nome do treino"
            />

            <ExercisesArea>
                <DefaultButton bgColor="#4AC34E" onPress={addExercise} underlayColor="transparent">
                    <ButtonText>
                        Adicionar Exerc??cio
                </ButtonText>
                </DefaultButton>

                <ExercisesList
                    data={exercises}
                    renderItem={({ item }) =>
                        <ExerciseItemEdit
                            data={item}
                            editAction={() => editExercise(item)}
                            delAction={() => delExercise(item)}
                        />
                    }
                    keyExtractor={item => item.name}
                />
            </ExercisesArea>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    let isEdit = (navigation.state.params && navigation.state.params.workout.id) ? true : false;

    const SaveArea = styled.TouchableHighlight`
    width:30px;
    height:30px;
    justifyContent:center;
    alignItems:center;
    `;

    const SaveImage = styled.Image`
        width:25px;
        height:25px;
    `;


    const SaveWorkoutButton = () => {


        const handleSave = () => {
            if(navigation.state.params && navigation.state.params.workout) {
                let workout = navigation.state.params.workout;

                if(workout.exercises.length > 0) {
                    if(workout.id != '') {
                        navigation.state.params.editWorkout(workout);   
                    } else {
                        workout.id = uuid.v1();
                        navigation.state.params.addWorkout(workout);
                    }
                    navigation.goBack();
                } else {
                    alert("Precisas de pelo menos um exerc??cio");
                }
            }
        }

        return (
            <SaveArea onPress={handleSave}>
                <SaveImage source={require('../assets/check-black.png')} />
            </SaveArea>
        );
    }

    return {
        title: isEdit ? 'Editar Treino' : 'Adicionar Treino',
        headerRight: () => <SaveWorkoutButton />,
        headerRightContainerStyle: {
            marginRight: 10
        }
    }
}

const mapStateToProps = (state) => {
    return {
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout:(workout)=>dispatch({type:'ADD_WORKOUT', payload:{workout}}),
        editWorkout:(workout)=>dispatch({type:'EDIT_WORKOUT', payload:{workout}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);