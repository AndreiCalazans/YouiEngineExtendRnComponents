# See Onboarding Tutorial https://you-i-labs.github.io/react-native-onboarding/exercises/5-native-modules-cpp-extending

# You.i Engine One React Native Template App

## Requirements

This project requires a local installation of the You.i Engine One SDK.
Use `youi-tv doctor` to see the basic required dependencies for the available platforms. See https://developer.youi.tv/ for more details and guides on installing the requirements.

## Contents

	__tests__/appium/

This is a directory containing example Appium tests. See https://developer.youi.tv/latest/Content/AppiumTopics/H1RNAppium.htm for more details on developing Appium tests for your app.

	client/

This is a directory containing the default roku-client if developing for Roku Cloud. See https://developer.youi.tv/latest/Content/OverviewTopics/H1CloudSolutionRokuCpp.htm for more details on developing for Roku cloud.

	youi/

This is a directory containing C++ application files and build files. The built native application binaries will by default be located in `youi/build/<PLATFORM>`.

	index.youi.js

This is the default entry point for the React Native application. If you would like to change the default entry point, during a build you can pass `--file` to generate or build or edit the `youi:entryFile` field in package.json.

## Building - with remote or development bundling

First build this You.i React Native application. This example shows how to build for OSX, but you can also specify `linux` or `uwp`:

	youi-tv build -p osx

You then need to run the bundling server to host the JS source files required for the app. In a new terminal / shell (as this command will not return) run:

	yarn start

Run the application with

	youi-tv run -p osx


## Building - with local bundling

To deploy an application without relying on the bundling server (for example due to network issues, testing, CI servers, or loading speed) you can build with local bundling. 

	youi-tv build -p osx --local

At this point you can run the application. The application assets will include a bundled copy of the JS application.

	youi-tv run -p osx


## More

To add more capabilities to your app, see the [quickstart guide](https://developer.youi.tv/latest/quickstart/your-first-app/).


## Advanced

- You can also generate, build and run with `youi-tv run -p osx`, which is roughly equivalent to:
	youi-tv generate -p osx
	youi-tv build -p osx
	youi-tv run -p osx

- You can change the default entry point of the application by modifying the `youi:entryFile` in package.json, and the default bundling mode by changing `youi:defaultBundleMode` to "local".

- Appium: Ensure that `babel-preset-react-native` is part of package.json for Appium to work with the app you build. If `babel-preset-react-native` is not part of package.json, run `yarn add babel-preset-react-native@4.0.0` on the terminal to add it.
