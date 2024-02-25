---
title: Formula 1 Cars Classification
stack: FastAI & TensorFlow
slug: f1-cv-model
date: 2023-12-12T00:00:00+00:00

thumb: ../images/thumbs/f1.webp

images:
  - ../images/carousel/streamlit2.png
  - ../images/carousel/f1.webp
  - ../images/carousel/streamlit1.png

  - ../images/carousel/streamlit2.png
  - ../images/carousel/streamlit3.png
---

## Predicting Formula 1 Car Types Using Transfer Learning with FastAI

#### Github: [Repository.](https://github.com/Walid-Birouk/CV-Transfer-Learning-with-FastAI-F1-CARS)

## <span>Ⅰ</span> Introduction

### Background

Formula 1 represents the zenith of motorsport, showcasing iconic teams like Mercedes, McLaren, Red Bull, Ferrari, and Renault. The distinctive design elements of each team's car present a unique challenge for visual classification, making it an intriguing problem for machine learning.

### Objective

The goal of this project is to leverage FastAI's transfer learning capabilities to develop a machine learning model that can classify images of Formula 1 cars by their teams.

## <span>Ⅱ</span> Data Collection

### Data Description

We compiled a dataset of Formula 1 car images from key teams: Mercedes, McLaren, Red Bull, Ferrari, and Renault. These images were curated using web scraping techniques to ensure a broad representation of each team's vehicles, capturing various angles, race conditions, and years. This approach provides a rich dataset conducive to effective model training.

## <span>Ⅲ</span> Model Development

Utilizing FastAI, we applied transfer learning methods to train our model on the collected dataset. The process involved adjusting learning rates and strategically unfreezing model layers to incrementally improve performance. Techniques such as data augmentation and mixed-precision training were employed to enhance the model's robustness and efficiency.

## <span>Ⅳ</span> Summary of Findings

Our project successfully developed a machine learning model capable of distinguishing between Formula 1 cars of different teams with high accuracy. The model's performance was rigorously evaluated, showing excellent results across various metrics, including confusion matrices and AUC values.

### The AUC values obtained for each class were as follows:

- Ferrari F1 Car: AUC = 1.00
- McLaren F1 Car: AUC = 1.00
- Mercedes F1 Car: AUC = 1.00
- Red Bull Racing F1 Car: AUC = 1.00
- Renault F1 Car: AUC = 1.00

## <span>Ⅴ</span> Reflection on Model Performance

The achieved accuracy underscores the model's ability to identify key features of F1 cars across different conditions. Employing mixed-precision training and discriminative learning rates has significantly contributed to the model's effectiveness.

### Potential Improvements

Future work could focus on expanding the dataset and exploring advanced model architectures. These efforts would aim to further enhance the model's accuracy and generalizability.

### Final Thoughts

This project underscores the potential of machine learning in sports analytics, particularly in visually intensive domains like Formula 1 racing. The advancements in AI hold promising applications for performance analysis and team strategy optimization in competitive sports.

## <span>Ⅵ</span> How to Use

Training the model, and using it for prediction are detailed in the accompanying notebooks. Please refer to these resources for a step-by-step guide to replicating our results.
