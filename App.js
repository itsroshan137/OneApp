import React, { Component } from 'react';
import { View} from 'react-native';

import AppButton from './app/Components/AppButton';
import Card from './app/Components/Card';
import ListingDetailsScreen from './app/Screens/ListingDetailsScreen';
import ViewImageScreen from './app/Screens/ViewImageScreen';
import WelcomeScreen from './app/Screens/WelcomeScreen';

export default function  App() {
  return(
      <ViewImageScreen />
  );
}