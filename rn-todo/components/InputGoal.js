import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const InputGoal = (props) => {
    const [inputGoal, setInputGoal] = useState('');

    const inputGoalHandler = (goal) => {
        setInputGoal(goal);
    };

    const addGoalHandler = () => {
        props.onAddInputGoal(inputGoal);
        setInputGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Goal List"
                    style={styles.textInput}
                    onChangeText={inputGoalHandler}
                    value={inputGoal}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="CANCEL"
                        color="red"
                        onPress={props.onCancleInputGoal}
                    />
                    <Button
                        title="Add"
                        onPress={addGoalHandler}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
});

export default InputGoal;
