import React from "react";
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image } from "react-native";

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
            // disabled
        />
        <TouchableOpacity
            onPress={() => {
                console.log("Subscribe");
                // Alert.alert("Button pressed");
            }}
            // disabled
        >
        <Image 
            style={styles.imgStyle}
            source={require("../../assets/text2.jpeg")}
        />
        <Text>Join Now</Text></TouchableOpacity>
      </View>
    );
  
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 200,
        textAlign: "center",
        fontSize: 30,
    },
    imgStyle: {
        width: 200,
        height: 200,
    },
})

export default OurButton;
