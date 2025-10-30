/**
 * App Navigation Configuration
 * Sets up the navigation structure for the portfolio app
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

// Import screens
import ProfileScreen from '../screens/ProfileScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ContactScreen from '../screens/ContactScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * AppNavigator sets up the main navigation structure
 */
export default function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{ title: 'Portfolio' }}
        />
        <Stack.Screen
          name="Skills"
          component={SkillsScreen}
          options={{ title: 'Skills & Expertise' }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ title: 'Contact Me' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}