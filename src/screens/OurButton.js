import React from "react";
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

const OurButton = () => {
  
    return (
      <View>
        <Text style={styles.textStyle}> Buttons </Text>
        <Button 
            title="Join Now"
            onPress={() => {
                // console.log("Subscribe");
                Alert.alert("Button pressed");
            }}
            disabled
        />
      </View>
    );
  
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 200,
        textAlign: "center",
        fontSize: 30,
    },
})

export default OurButton;
