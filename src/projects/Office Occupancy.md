---
title: Time Series, Office Occupancy Prediction
stack: Facebook Prophet & Python
slug: office-occupancy-tracker
date: 2023-12-13T00:00:00+00:00
thumb: ../images/thumbs/fb0.png
images:
  - ../images/carousel/fb0.png
  - ../images/carousel/fb.jpg
  - ../images/carousel/fb2.jpg
  - ../images/carousel/fb1.jpg

  - ../images/carousel/fb3.jpg
  - ../images/carousel/fb4.jpg
---

## Office Occupancy Prediction: A Comprehensive Forecasting Model Development

#### Github: [Repository.](https://github.com/Walid-Birouk/Time-Series-for-office-occupancy)

## <span>Ⅰ.</span> Introduction

The development of a Time Series Forecasting Model for predicting office occupancy entails a rigorous approach, comprising data generation, cleaning, and training a predictive model. This README document outlines the journey from simulating synthetic data to employing Facebook's Prophet model for forecasting, providing a detailed blueprint for each phase. Our objective is to create a robust forecasting model that incorporates real-world scenarios and external factors, ensuring accurate and actionable occupancy predictions.

## <span>Ⅱ.</span> Data Generation

### A. Overview

The initial phase involves generating synthetic data to simulate office occupancy over an entire year. This process aims to mirror real-world scenarios that significantly impact occupancy, such as meeting room bookings, event activities, and staff attendance, while also considering external factors like transportation availability and weather conditions.

### B. Key Objectives

- **Customization and Realism**: By customizing holiday calendars and simulating transportation and weather conditions, we establish a foundation for highly realistic occupancy forecasting.
- **Versatility of Data**: The data spans a full year, offering a comprehensive dataset for training predictive models to forecast office occupancy with high accuracy.
- **Insights for Office Management**: The synthetic data provides valuable insights for office space planning, resource allocation, and overall management, promoting efficient space utilization.

## <span>Ⅲ.</span> Data Cleaning

### A. Introduction

The essential process of data cleaning and preprocessing focuses on refining three key datasets: meeting room bookings, event activities, and staff attendance. The goal is to enhance data quality by addressing anomalies, ensuring consistency, and implementing necessary transformations.

### B. Process and Impact

- **Unified Analysis Framework**: By merging datasets and transforming features, we prepare the data for accurate forecasting.
- **Visualizations and Outlier Detection**: Through data visualization, we understand patterns, detect outliers, and ensure the data integrity for predictive modeling.
- **Foundation for Predictive Modeling**: The cleaned dataset, free from distortion of extreme anomalies, is ready for forecasting future occupancy trends.

## <span>Ⅳ.</span> Prophet Model Training

### A. Implementation

Utilizing Facebook's Prophet, a model adept at forecasting time series data with daily and seasonal trends, we predict office occupancy. The model is configured with appropriate seasonality and regressors to capture the nuances of our occupancy data, trained on the preprocessed dataset, and evaluated for accuracy.

### B. Evaluation and Deployment

- **Accuracy Metrics**: The model's performance is assessed using MAE, RMSE, MAPE, and R-squared statistics, providing insights into its predictive power.
- **Future Predictions**: With the model trained and serialized, it stands ready for future occupancy predictions, supporting decision-making and office space management.

## <span>Ⅴ.</span> Conclusion

The journey from generating synthetic data to deploying a trained Prophet model encapsulates a comprehensive approach to forecasting office occupancy. This project not only demonstrates the application of data science techniques but also highlights the importance of meticulous preparation and the value of predictive analytics in office management. As we conclude, we anticipate leveraging the model to its full potential, driven by a foundation of quality, integrity, and a deep understanding of our data.
