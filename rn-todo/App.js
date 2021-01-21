import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import ListInputGoals from './components/ListInputGoals';
import InputGoal from './components/InputGoal';

export default function App() {
  const [listInputGoals, setListInputGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addInputGoalHandler = (inputGoal) => {
    setListInputGoals((currentListInputGoals) => [
      ...currentListInputGoals,
      { id: Math.random().toString(), value: inputGoal },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setListInputGoals((currentListInputGoals) => {
      return currentListInputGoals.filter((goal) => goal.id != goalId);
    });
  };

  const cancelGoalHandler = () => {
      setIsAddMode(false)
  }

  return (
    <View style={styles.screenContainer}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)}/>
      <InputGoal visible={isAddMode} onAddInputGoal={addInputGoalHandler} onCancleInputGoal={cancelGoalHandler} />
      <FlatList
        data={listInputGoals}
        renderItem={(itemData) => (
          <ListInputGoals
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            goal={itemData.item.value}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: { padding: 50 },
});
