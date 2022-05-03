// import libraries to create components
import React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import ChallengeFlatList from "./src/screens/ChallengeFlatList";


// create a component that return some jsx / simple function
const App = () => {
  return (
    <View>
      {/* <Text style={styles.textStyle}>Hello world!</Text>
      <StatusBar style="auto" /> */}
      <ChallengeFlatList />
    </View>
  );
};


// Create a StyleSheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});


// export the file, so that we can use it elsewhere in our app
export default App;