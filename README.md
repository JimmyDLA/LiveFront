# LiveFront Take-Home Challenge

This is a React Native application built as part of a take-home coding challenge.  
It uses the **Rick and Morty API** to fetch and display character information.

---

## Features

- Fetches data from a public REST API:  
  **Characters Endpoint:** [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)
- Navigation between screens using **React Navigation**
- Mobile-friendly UI built with React Native

## Prerequisites

- **Node.js:** >= 18.x
- **npm** or **yarn** package manager
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)
- **React Native CLI** installed globally:
  ```bash
  npm install -g react-native-cli
  ```

## Install Dependencies
```sh
# Using npm
npm install

# OR using Yarn
yarn
```

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
cd ios

bundle exec pod install
# or
pod install
```

## Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS



For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

### Run Tests

```sh
# Using npm
npm run test

# OR using Yarn
yarn test
```

## 3rd-Party Libraries Used

### Navigation

- [@react-navigation/native](https://reactnavigation.org/docs/stack-navigator/) — Handles navigation between screens.

- [@react-navigation/native-stack](https://reactnavigation.org/docs/stack-navigator/) — Provides a performant native stack navigator.

- [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/) — Additional stack navigation support.

### React Native Essentials

- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) — Smooth gesture handling for touch interactions.

- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) — Handles safe area insets for devices with notches or rounded corners.

- [react-native-screens](https://github.com/software-mansion/react-native-screens) — Optimizes memory usage and performance by using native navigation primitives.

### Testing

- [jest](https://jestjs.io/) — JavaScript testing framework.

- [@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/) — For testing React Native components in a user-centric way.

- [react-test-renderer](https://reactnative.dev/docs/test-renderer) — For snapshot testing React components.

## Open Source Attribution

[Rick and Morty API](https://rickandmortyapi.com) - The Rick and Morty API is filled with canonical information as seen on the TV show.

## Authors

[Jimmy De Los Angeles](https://www.linkedin.com/in/jimmydla/)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.

- [Awesome-Readme](https://github.com/matiassingers/awesome-readme)
- [Mobbin](https://mobbin.com/)
