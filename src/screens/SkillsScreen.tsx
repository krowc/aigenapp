/**
 * SkillsScreen Component
 * Displays developer's technical skills organized by category
 */

import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import type { Skill } from '../types';
import { SkillCategory, ProficiencyLevel } from '../types';

/**
 * Sample skills data - replace with actual skills
 */
const skills: Skill[] = [
  {
    id: '1',
    name: 'TypeScript',
    category: SkillCategory.LANGUAGES,
    proficiencyLevel: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 3,
  },
  {
    id: '2',
    name: 'React Native',
    category: SkillCategory.FRAMEWORKS,
    proficiencyLevel: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 2,
  },
  // Add more skills as needed
];

/**
 * Groups skills by category for section list display
 */
const groupedSkills = Object.values(SkillCategory).map(category => ({
  title: category,
  data: skills.filter(skill => skill.category === category)
})).filter(section => section.data.length > 0);

/**
 * SkillsScreen displays developer's skills grouped by category
 */
export default function SkillsScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <SectionList
        sections={groupedSkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <View style={styles.skillHeader}>
              <Text style={styles.skillName}>{item.name}</Text>
              <Text style={styles.proficiency}>{item.proficiencyLevel}</Text>
            </View>
            <Text style={styles.experience}>
              {item.yearsOfExperience} {item.yearsOfExperience === 1 ? 'year' : 'years'} of experience
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  skillItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
  },
  proficiency: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  experience: {
    fontSize: 14,
    color: '#666',
  },
});