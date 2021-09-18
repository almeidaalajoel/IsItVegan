import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, Button} from 'react-native';
import {notVeganSet, notVeganArr} from '../constants/Ingredients';
import Highlighter from 'react-native-highlight-words';

const IsVegan = ({navigation, route}) => {
  let name = makeName(route.params.food);
  if (checkVegan(route.params.food.ingredients))
    return vegan(route.params.food, name);
  else return notVegan(route.params.food, name);
};

function checkVegan(ingredients) {
  for (const word of ingredients.split(' ')) {
    if (
      notVeganSet.has(word.toLowerCase()) ||
      notVeganSet.has(word.slice(0, -1).toLowerCase()) ||
      notVeganSet.has(word.slice(1).toLowerCase()) ||
      notVeganSet.has(word.slice(1, -1).toLowerCase())
    )
      return false;
  }
  return true;
}

function makeName(food) {
  let name = '';
  if ('brandName' in food) name += food.brandName;
  if ('subbrandName' in food) name += ' ' + food.subbrandName;
  if ('description' in food)
    name += ' ' + food.description.substr(0, food.description.indexOf(','));
  return name;
}

function vegan(food, name) {
  return (
    <View>
      <Text>{name + ' is probably vegan!'}</Text>
      <Text>Ingredients:</Text>
      <Text>{food.ingredients}</Text>
    </View>
  );
}

function notVegan(food, name) {
  return (
    <View>
      <Text>{name + ' is probably not vegan :('}</Text>
      <Text>Ingredients:</Text>
      <Highlighter
        highlightStyle={{backgroundColor: 'red'}}
        searchWords={notVeganArr}
        textToHighlight={food.ingredients}
      />
    </View>
  );
}

export default IsVegan;
