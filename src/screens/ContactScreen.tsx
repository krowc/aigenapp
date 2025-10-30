/**
 * ContactScreen Component
 * Displays contact information and social media links
 */

import React from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import type { Profile } from '../types';

/**
 * Sample contact data - replace with actual data
 */
const contactInfo: Profile = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'Passionate software developer with expertise in React Native, TypeScript, and cloud technologies.',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  socialLinks: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.dev',
  },
};

/**
 * Renders a contact item with an icon and text
 */
const ContactItem: React.FC<{
  icon: string;
  text: string;
  onPress?: () => void;
}> = ({ icon, text, onPress }) => (
  <Pressable
    style={[styles.contactItem, onPress && styles.clickable]}
    onPress={onPress}
  >
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.contactText}>{text}</Text>
  </Pressable>
);

/**
 * ContactScreen displays contact information and social links
 */
export default function ContactScreen(): React.JSX.Element {
  /**
   * Opens URLs in the default browser
   */
  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  /**
   * Opens email client with pre-filled address
   */
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactInfo.email}`);
  };

  /**
   * Opens phone dialer with number
   */
  const handlePhonePress = () => {
    if (contactInfo.phone) {
      Linking.openURL(`tel:${contactInfo.phone}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <ContactItem
          icon="📧"
          text={contactInfo.email}
          onPress={handleEmailPress}
        />
        {contactInfo.phone && (
          <ContactItem
            icon="📞"
            text={contactInfo.phone}
            onPress={handlePhonePress}
          />
        )}
        <ContactItem
          icon="📍"
          text={contactInfo.location}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social Links</Text>
        {contactInfo.socialLinks.github && (
          <ContactItem
            icon="💻"
            text="GitHub"
            onPress={() => handleLinkPress(contactInfo.socialLinks.github!)}
          />
        )}
        {contactInfo.socialLinks.linkedin && (
          <ContactItem
            icon="💼"
            text="LinkedIn"
            onPress={() => handleLinkPress(contactInfo.socialLinks.linkedin!)}
          />
        )}
        {contactInfo.socialLinks.twitter && (
          <ContactItem
            icon="🐦"
            text="Twitter"
            onPress={() => handleLinkPress(contactInfo.socialLinks.twitter!)}
          />
        )}
        {contactInfo.socialLinks.website && (
          <ContactItem
            icon="🌐"
            text="Personal Website"
            onPress={() => handleLinkPress(contactInfo.socialLinks.website!)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  clickable: {
    cursor: 'pointer',
  },
  icon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#444',
  },
});