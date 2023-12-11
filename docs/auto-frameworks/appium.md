---
title: Appium
titleTemplate: A mobile UI automation tools
description: Appium basic usage
head:
  - - meta
    - name: description
      content: Appium basic usage
tags:
  - Appium
categories:
  - Automation Framework
---

# Appium

> [Official Documentation](https://appium.io/)

## Appium Requirements

Follow the official documentation, the basic requirements for the Appium server are:

- A macOS, Linux, or Windows operating system
- Node.js version in the SemVer range `^14.17.0 || ^16.13.0 || >=18.0.0`
- NPM version >= 8 (NPM is usually bundled with Node.js, but can be upgraded independently)

## Install Appium

Installing Appium is as easy as running a single NPM command:

```shell
npm i --location=global appium
```

This command installs Appium globally on your system so that you can access it
from the command line simply by running the `appium` command. Go ahead and run
it now:

```shell
appium
```

## Install the UiAutomator2 Driver

### Set up Android automation requirements

According to the driver, in addition to a working Appium server, we also need to
do the following:

- Download [Android SDK platform tools](https://developer.android.com/studio/releases/platform-tools).
  You will probably want to download [Android Studio](https://developer.android.com/studio)
  and manage the SDK tools from within it for the easiest experience.
- Set an environment variable pointing to the directory on disk where the Android
  tools installed. You can usually find the path to this directory in the Android
  Studio SDK manager. It will contains the `platform-tools` and other directories.
  We need to define and persist the environment variable as `ANDROID_HOME`.
