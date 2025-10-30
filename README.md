# Dev Portfolio App

A professional portfolio application built with React Native and Expo, showcasing software development projects and skills.

## Overview

This React Native application serves as a comprehensive portfolio for software developers, featuring:

- Profile section with professional information
- Projects showcase with detailed information
- Skills and technologies section
- Contact information and social links
- Clean, responsive design

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

Start the development server:
```bash
npx expo start
```

This will open the Expo Developer Tools in your browser. From there, you can:
- Press 'a' to run on Android Emulator
- Press 'i' to run on iOS Simulator
- Scan the QR code with Expo Go app on your device

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/       # Main application screens
├── navigation/    # Navigation configuration
├── types/        # TypeScript type definitions
├── hooks/        # Custom React hooks
├── utils/        # Utility functions
└── assets/       # Images, fonts, and other static files
```

## Main Components

- `ProfileScreen`: Displays developer's personal and professional information
- `ProjectsScreen`: Showcases portfolio projects with details
- `SkillsScreen`: Lists technical skills and competencies
- `ContactScreen`: Contact information and social media links

## Technical Details

- Built with React Native and Expo
- Written in TypeScript for type safety
- Uses React Navigation for routing
- Implements responsive design patterns
- Follows React Native best practices

## Limitations

- Images and project data need to be manually updated
- Requires Expo Go app for mobile testing without building
- Some native features may require ejecting from Expo

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.