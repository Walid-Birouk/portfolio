---
title: Autonomous Driving Car (Unity)
stack: TensorFlow & Flask & Open CV
slug: sdc-cnn-model
date: 2024-01-05T00:00:00+00:00
thumb: ../images/thumbs/sdc0.png

images:
  - ../images/carousel/sdc0.png
  - ../images/carousel/sdc1.png
  - ../images/carousel/sdc2.png
  - ../images/carousel/sdc3.png
---

## Comprehensive Guide to Autonomous Driving using CNN and OpenCV

#### Github: [Repository.](https://github.com/Walid-Birouk/)

## Introduction

This documentation details the development and comparison of two distinct approaches for steering angle prediction in autonomous vehicles. The project integrates Convolutional Neural Network (CNN) models and traditional computer vision techniques using OpenCV, highlighting their application in steering a virtual car within Unity's simulation environment.

## <span>Ⅰ.</span> Project Overview

The initiative splits into distinct phases: data handling, model training using CNN, and an OpenCV-based approach for real-time driving simulation. Each method aims to autonomously control the steering angle of a simulated car, relying on different principles of image processing and machine learning.

### Data Handling

The foundational step involves preprocessing image data captured from the vehicle's cameras. Simplifying file paths and extracting relevant features ensure streamlined data analysis and manipulation.

### CNN for Steering Angle Prediction

A CNN model, designed and trained on processed image data, predicts steering angles to navigate the vehicle. This deep learning approach analyzes the visual inputs in a comprehensive manner, learning complex patterns and features essential for accurate steering control.

#### Key Features:

- **Exploratory Data Analysis**: Identifies biases in steering angle distribution, crucial for dataset balancing.
- **Data Augmentation**: Enhances model robustness by introducing variability in the training dataset.
- **Model Architecture**: Employs convolutional, flattening, and fully connected layers to process and learn from input images.

### OpenCV Approach for Autonomous Driving

An alternative methodology utilizes OpenCV for image preprocessing, edge detection, and lane line identification. This approach focuses on detecting lane lines and calculating the steering angle based on the geometry of the detected lines.

#### Process Flow:

- **Image Preprocessing**: Converts images to grayscale, applies Gaussian blur, and detects edges using the Canny edge detector.
- **Region of Interest Selection**: Masks the edge-detected image to focus on the likely lane line areas.
- **Lane Line Detection**: Uses the Hough Transform method to detect lines and calculate the steering angle based on their orientation.

### Real-Time Prediction and Vehicle Control

Both methods employ a `socketio` server interfacing with Unity's simulation for real-time vehicle control. The CNN approach uses a `drive.py` script, whereas the OpenCV technique is implemented in `opencvdrive.py`, each receiving live image data and sending back steering angles and throttle commands to the simulation.

## <span>Ⅱ.</span> Comparative Analysis: CNN vs. OpenCV

The CNN model, leveraging deep learning, offers a more nuanced understanding of the driving environment by learning from a vast array of visual features. This method excels in complex scenarios, adapting to various lighting conditions, and detecting subtle cues for navigation.

Conversely, the OpenCV approach, grounded in traditional computer vision techniques, provides a straightforward, geometrically-driven method for steering angle prediction. While effective in clear, well-defined environments, its performance may degrade in visually complex or poorly lit conditions.

## <span>Ⅲ.</span> Conclusion

The CNN-based approach generally outperforms the OpenCV method in terms of versatility and accuracy in diverse driving scenarios. Deep learning models, trained on extensive datasets, capture the intricacies of the driving environment more effectively, leading to superior predictive performance.

This project demonstrates the potential of CNNs in autonomous driving systems, offering insights into their development and deployment. Future work may explore hybrid models that combine deep learning with traditional computer vision techniques for enhanced performance.

## Acknowledgments

Special thanks to Unity for providing a simulation environment conducive to the development and testing of autonomous driving models. This project underscores the collaborative efforts between machine learning and computer vision communities in advancing autonomous vehicle technologies.
