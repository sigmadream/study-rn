import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export default function App() {
  const [inputGoal, setInputGoal] = useState('');
  const [listInputGoals, setListInputGoals] = useState([]);

  const inputGoalHandler = (goal) => {
    setInputGoal(goal);
  };

  const addInputGoalHandler = () => {
    setListInputGoals((currentListInputGoals) => [
      ...listInputGoals,
      { id: Math.random().toString(), value: inputGoal },
    ]);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal List"
          style={styles.textInput}
          onChangeText={inputGoalHandler}
          value={inputGoal}
        />
        <Button title="Add" onPress={addInputGoalHandler} />
      </View>
      <FlatList
        data={listInputGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { padding: 50 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ecc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
