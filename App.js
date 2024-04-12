import React from "react";
import { View } from "react-native";
import TodoList from "./component/ToDoList";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <TodoList />
    </View>
  );
};

export default App;
