---
title: The Titanic Dataset (EDA & ML)
stack: Pandas & Numpy & Matplot
slug: titanic-dataset-model
date: 2023-12-08T00:00:00+00:00
thumb: ../images/thumbs/titanic0.webp

images:
  - ../images/carousel/titanic0.webp
  - ../images/carousel/titanic1.png
  - ../images/carousel/titanic4.png
  - ../images/carousel/titanic2.png
  - ../images/carousel/titanic3.png
  - ../images/carousel/titanic5.png
  - ../images/carousel/titanic6.png
  - ../images/carousel/titanic7.png
  - ../images/carousel/titanic8.png
---

## Preparing the Titanic Dataset for Machine Learning

#### Github: [Repository.](https://github.com/Walid-Birouk/Titanic-EDA-and-ML)

## Introduction

In this comprehensive guide, we'll delve into the meticulous process of preparing the Titanic dataset for machine learning analysis using a Random Forest model. The Titanic dataset, a compilation of data on passengers aboard the ill-fated RMS Titanic, has become a classic dataset for data science projects, particularly for those new to the field. Our goal was to clean and encode the dataset, ensuring it's ready for predictive modeling. Here's a step-by-step walkthrough of what we did and why.

## <span>Ⅰ.</span> Data Cleaning and Preparation

### Reading and Renaming Columns

We began by importing the necessary Python library, pandas, and loading the dataset from a CSV file named `titanic3.csv`. The first step in cleaning involved renaming the columns to ensure consistency and ease of access. Spaces were replaced with underscores, and all column names were converted to lowercase. This standardization helps avoid errors and confusion in later analysis.

### Handling Missing Values

The `age` column had missing values, which were imputed with the median age of the dataset. Using the median is a common practice for dealing with missing numeric data because it's robust to outliers. We then rounded the ages to integers for uniformity and easier categorization.

Fares equal to zero were temporarily replaced with NaN to accurately impute missing fare values later. For passengers with null fares, we imputed values based on the median fare of similar passengers, considering their class, embarkation point, and age. This approach provides a more accurate estimation of fare values than using a broader measure like the overall median fare.

### Dropping Columns

Columns with a high percentage of missing values or those unlikely to influence the outcome (survival) were dropped. The `cabin` column was removed due to its sparsity and questionable impact on survival predictions.

### Feature Engineering

We made several adjustments to the dataset to better capture the nuances of the data:

- The `boat` column, indicating lifeboat assignment, was simplified to retain only the first part of any entry. This simplification helped reduce the feature's complexity without losing significant information. We then applied one-hot encoding to transform this categorical variable into a format suitable for machine learning algorithms.
- The `body` column, indicating body identification numbers for those who didn't survive, was converted into a binary feature. This transformation simplifies the model's task by focusing on the presence or absence of a body ID rather than the specific ID number.
- A new feature, `fare_per_person`, was created by adjusting the fare based on family size. This adjustment provides a more accurate representation of the fare's impact on survival by considering the economic status on a per-person basis.
- The dataset was further enriched by categorizing ages into meaningful groups and applying one-hot encoding. This process allows the model to recognize patterns across different age groups more effectively.

### Final Adjustments and Encoding

We applied one-hot encoding to the `sex` column, transforming it into binary `sex_male` and `sex_female` columns. This step is crucial for models that require numeric input. Finally, unnecessary columns were dropped, and the cleaned dataset was saved to a new CSV file, `titanicEncodedv2.csv`, ready for machine learning analysis.

## <span>Ⅱ.</span> Conclusion

The preparation of the Titanic dataset involved careful consideration of each feature's relevance and representation. Through cleaning, imputing missing values, feature engineering, and encoding, we've transformed the raw data into a form that's not only cleaner but also more conducive to uncovering insights with machine learning. The next step involves building and training a Random Forest model to predict survival on the Titanic, with the dataset now fully prepped for this task. Our methodology ensures that the data fed into the model is of high quality, which is crucial for developing accurate and reliable predictive models.
