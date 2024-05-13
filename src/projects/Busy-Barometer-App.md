---
title: Busy Barometer App
stack: React & Firebase & Flask API
slug: busy-barometer-app
date: 2023-12-07T00:00:00+00:00
thumb: ../images/thumbs/g0.png
images:
  - ../images/carousel/g1.png
  - ../images/carousel/g2.png
  - ../images/carousel/fb4.jpg
---

## Building the Axxes Busy Barometer: A Full Stack Journey

#### Github: [Repository.](https://github.com/Walid-Birouk/)

## <span>Ⅰ.</span>Introduction

In the quest to enhance office space management at Axxes headquarters in Antwerp, we embarked on a comprehensive project to predict and display daily office occupancy levels. This endeavor led to the creation of the Axxes Busy Barometer App, a sophisticated application that combines the forecasting power of Facebook's Prophet model with the versatility of a Gatsby-React frontend and robust Firebase authentication. This blog post details our journey from data analysis to deployment, highlighting the technologies and methodologies that played a pivotal role in bringing the Busy Barometer to life.

## <span>Ⅱ.</span> The Foundation: Facebook's Prophet Model

Our journey began with the development of a predictive model using Facebook's Prophet, a tool designed for forecasting time series data with daily and seasonal trends. The model was trained on synthetic data, simulating various scenarios that could affect office occupancy, such as meeting room bookings, event activities, and staff attendance. The inclusion of external factors like transportation availability and weather conditions allowed us to forecast office occupancy with remarkable accuracy.

## <span>Ⅲ.</span> API Development: Flask with WSGI

To serve the predictions made by the Prophet model, we developed a custom API using Flask, a lightweight WSGI web application framework. This API acts as the intermediary between our predictive model and the frontend application, handling requests for occupancy predictions for specific dates or ranges. The Flask application is efficiently deployed using WSGI, ensuring seamless communication and data exchange with the frontend.

## <span>Ⅳ.</span> Frontend Innovation: Gatsby-React Application

The Axxes Busy Barometer App is a React-based Gatsby application that provides a dynamic and interactive user interface for displaying daily occupancy predictions. The choice of Gatsby for developing the frontend was driven by its powerful performance optimization features and its ability to generate static pages for fast load times. The app features an interactive UI with gauge displays and prediction cards, offering users real-time insights into office occupancy levels. The fully responsive design ensures a seamless experience across all devices.

## <span>Ⅴ.</span> Secure Authentication: Firebase

Understanding the importance of security and user management, we integrated Firebase for authentication within the Busy Barometer App. Firebase not only offers a robust set of authentication services but also simplifies the process of managing users. This integration allows us to ensure that access to occupancy predictions is secure and that user data is handled with the utmost care.

## <span>Ⅵ.</span> Deployment and Usage

Deploying the Axxes Busy Barometer App involved setting up the Flask API to serve the Prophet model's predictions and deploying the Gatsby-React application to a web server. Users can log in through Firebase authentication and interact with the application, viewing daily occupancy levels, toggling between morning and afternoon predictions, and fetching occupancy data for specified date ranges.

## <span>Ⅶ.</span> Conclusion

The development of the Axxes Busy Barometer App represents a holistic approach to solving office space management challenges through technology. By leveraging the predictive capabilities of Facebook's Prophet model, the efficiency of a Flask API, the interactivity of a Gatsby-React frontend, and the security of Firebase authentication, we have created a tool that not only forecasts office occupancy but also provides actionable insights for efficient space utilization. This project exemplifies the power of combining various technologies to create a comprehensive solution that addresses real-world needs.

### Acknowledgments

We extend our gratitude to the teams behind Facebook's Prophet, Flask, Gatsby, React, and Firebase for their invaluable tools and documentation, which were instrumental in the success of this project.
