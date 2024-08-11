# Graphite

**Graphite** is a capstone project developed for the fourth year of our academic program. It is an innovative solution designed to extend the storage capacity of mobile phones using an external Bluetooth hard drive. This project combines the functionality of an ESP32 development board with a companion mobile app to provide seamless and efficient storage expansion.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Components](#components)
- [How It Works](#how-it-works)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Acknowledgements](#acknowledgements)

## Project Overview

Graphite aims to address the problem of limited storage on mobile devices by offering a wireless solution for storage expansion. By leveraging Bluetooth connectivity and the ESP32 development board, Graphite allows users to easily offload files from their phones to an external hard drive without the need for physical connections.

## Features

- **Bluetooth Connectivity:** Seamlessly connect your mobile device to the external hard drive via Bluetooth.
- **Easy Storage Management:** Use the companion app to manage file transfers between your phone and the external hard drive.
- **Expandable Storage:** Increase your phone’s storage capacity without the need for cables or complex setups.
- **ESP32 Integration:** Utilizes the ESP32 development board for efficient Bluetooth communication and data management.

## Components

1. **ESP32 Development Board**: The core of the project, responsible for managing Bluetooth connections and data transfer.
2. **External Hard Drive**: The storage device that extends the phone's storage capacity.
3. **Mobile App**: A companion app developed to facilitate communication between the mobile phone and the hard drive.
4. **Power Supply**: Provides power to the ESP32 and the external hard drive.

## Installation

### Hardware Setup

1. **ESP32 Configuration**: Follow the instructions provided in the ESP32 documentation to set up the board.
2. **Connecting the Hard Drive**: Connect the external hard drive to the ESP32 using appropriate interfacing methods (e.g., USB or serial connection).
3. **Powering the System**: Ensure that both the ESP32 and the hard drive are properly powered.

### App Installation

1. **Download the App**: Search for “Graphite” on your mobile app store (available on both Android and iOS).
2. **Install the App**: Follow the on-screen instructions to complete the installation.

## Usage

1. **Open the App**: Launch the Graphite app on your mobile device.
2. **Connect to Hard Drive**: Use the app to search for and connect to the Bluetooth hard drive.
3. **Transfer Files**: Select files on your phone to transfer to the hard drive, or vice versa.
4. **Manage Storage**: Use the app’s interface to manage and organize files on the external hard drive.

## Technical Details

- **Development Board**: ESP32
- **Bluetooth Protocol**: BLE (Bluetooth Low Energy)
- **Mobile App**: Developed using React Native , Swift .
- **File Management**: Implemented with  SQLite



## Acknowledgements

- **ESP32 Development Board**: For providing the hardware foundation for the project.
