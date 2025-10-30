/**
 * ProjectsScreen Component
 * Displays a list of portfolio projects with details
 */

import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import type { Project } from '../types';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type ProjectsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Projects'>;
};

/**
 * Sample project data - replace with actual projects
 */
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React Native and Node.js',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'TypeScript'],
    startDate: '2023-01',
    endDate: '2023-06',
    githubUrl: 'https://github.com/example/ecommerce',
  },
  // Add more projects as needed
];

/**
 * Renders individual project items in the list
 */
const ProjectItem: React.FC<{
  project: Project;
  onPress: () => void;
}> = ({ project, onPress }) => (
  <Pressable style={styles.projectCard} onPress={onPress}>
    {project.imageUrl && (
      <Image
        source={{ uri: project.imageUrl }}
        style={styles.projectImage}
      />
    )}
    <View style={styles.projectInfo}>
      <Text style={styles.projectTitle}>{project.title}</Text>
      <Text style={styles.projectDescription} numberOfLines={2}>
        {project.description}
      </Text>
      <View style={styles.technologies}>
        {project.technologies.map((tech, index) => (
          <Text key={index} style={styles.technology}>
            {tech}
          </Text>
        ))}
      </View>
    </View>
  </Pressable>
);

/**
 * ProjectsScreen displays a list of portfolio projects
 */
export default function ProjectsScreen({ navigation }: ProjectsScreenProps): React.JSX.Element {
  /**
   * Handles navigation to project detail screen
   */
  const handleProjectPress = (projectId: string) => {
    navigation.navigate('ProjectDetail', { projectId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <ProjectItem
            project={item}
            onPress={() => handleProjectPress(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  projectImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  projectInfo: {
    padding: 16,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  technology: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
  },
});