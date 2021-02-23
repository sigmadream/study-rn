import React from "react";

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from "react-navigation-tabs";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from "../screens/FavoritesScreen";


const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: {
    screen: MealDetailScreen,
  },
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favorites: FavoritesScreen,
});

export default createAppContainer(MealsFavTabNavigator);
