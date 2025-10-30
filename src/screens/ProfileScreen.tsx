/**
 * ProfileScreen Component
 * Displays developer's personal and professional information
 */

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { Profile } from '../types';

/**
 * Mock profile data - replace with actual data
 */
const profile: Profile = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'Passionate software developer with expertise in React Native, TypeScript, and cloud technologies.',
  location: 'San Francisco, CA',
  email: 'john.doe@example.com',
  socialLinks: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  }
};

/**
 * ProfileScreen displays the developer's profile information
 */
export default function ProfileScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        {profile.avatar && (
          <Image
            source={{ uri: profile.avatar }}
            style={styles.avatar}
          />
        )}
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.contactInfo}>📍 {profile.location}</Text>
        <Text style={styles.contactInfo}>✉️ {profile.email}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
});