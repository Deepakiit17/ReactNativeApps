import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ChallengeFlatList = () => {
  const netflixSeries = [
    {
      name: "Archive 81",
      year: "2022",
      Creater: "Rebecca Sonnenshine",
      Genre: "Horro, Thriller",
    },
    {
      name: "Cheer",
      year: "2021 - 2022",
      Creater: "Greg Whiteseley",
      Genre: "Docuseries",
    },
    {
      name: "Cobra Kai",
      year: "2018 - 2022",
      Creater: "Hayden Schlossberg",
      Genre: "Drama",
    },
    {
      name: "The Witcher",
      year: "2020 - 2022",
      Creater: "Lauren Schmidt Hissrich",
      Genre: "Reality",
    },
    {
      name: "Emily in Paris",
      year: "2020",
      Creater: "Darren Star",
      Genre: "Romance, Drama",
    },
    {
      name: "Death Note",
      year: "2021",
      Creater: "Unknown",
      Genre: "Horrer, Thriller",
    },
  ];

  return (
    <View>
      <Text style={styles.textStylesOne}>List of Top 10 Series in Netflix</Text>
      <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
          return key.name;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={netflixSeries}
        renderItem={({ item }) => {
          return (
            <View style={styles.viewStyle}>
              <Text style={styles.textStyles}>Name: {item.name}</Text>
              <Text style={styles.textStyles}>Creater: {item.Creater}</Text>
              <Text style={styles.textStyles}>Year: {item.year}</Text>
              <Text style={styles.textStyles}>Genre: {item.Genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 5,
  },
  textStyles: {
    color: "white",
    fontSize: 30,
    backgroundColor: "#009688",
    padding: 5,
  },
  viewStyle: {
    padding: 5,
    margin: 20,
  },
  textStylesOne: {
    margin: 30,
    fontSize: 50,
  },
});

export default ChallengeFlatList;
