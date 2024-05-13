---
title: Crop Production EDA & ML
stack: Pandas & Numpy & Seaborn
slug: crop-stats-model
date: 2023-12-09T00:00:00+00:00
thumb: ../images/thumbs/crop0.png

images:
  - ../images/carousel/crop0.png
  - ../images/carousel/crop1.png
  - ../images/carousel/crop2.png
  - ../images/carousel/crop3.png
  - ../images/carousel/crop4.png
  - ../images/carousel/crop5.png
  - ../images/carousel/crop6.png
---

## Preparing the 20th Century Food Crop Statistics Dataset for Decision Tree Regression

#### Github: [Repository.](https://github.com/Walid-Birouk/20th-century-crop-stats)

## <span>Ⅰ.</span> Introduction

In this guide, we explore the detailed process of preparing the 20th-century food crop statistics dataset for analysis with a Decision Tree Regressor model. This dataset, encompassing crop statistics from 1900 to 2017, provides a rich historical view of agricultural productivity across different regions and crops. The preparation involved cleaning, imputing missing values, feature engineering, and ensuring data integrity to make it suitable for machine learning applications. Here’s a detailed breakdown of what was done and why.

## <span>Ⅱ.</span> Data Cleaning and Preparation

### Initial Steps

The process began with loading the dataset from an Excel file, `food-twentieth-century-crop-statistics-1900-2017-xlsx.xlsx`, using the pandas library. This initial step is crucial for accessing and manipulating the data efficiently.

### Cleaning and Renaming

Redundant and empty columns, such as 'Unnamed: 0', 'year', and 'admin2', were identified and removed to streamline the dataset. The column 'admin0' was renamed to 'country' for clarity and consistency with common naming conventions.

### Handling China-specific Data

Data related to China required special attention due to its unique administrative divisions and notes. The 'notes' column, when not null, was used to update the 'admin1' column for China-specific rows, enhancing the granularity and accuracy of the location data.

### Imputing Missing Values

For regions where 'admin1' was missing, a new value combining "Unknown" with the country name was created. This approach ensures that each entry has a complete set of location identifiers, improving the dataset's usability for regional analysis.

### Filtering and Expanding Data

The dataset was filtered to include only the years from 1930 to 2017, focusing on a period of significant agricultural development and data availability. To address gaps in the data, a comprehensive range of years for each country-region-crop combination was created, ensuring a consistent time series for analysis.

### Replacing Zero Values

Zero values in 'hectares (ha)', 'production (tonnes)', and 'yield(tonnes/ha)' were replaced with calculated values where appropriate. This step is critical for maintaining the integrity of the dataset, as zero values can significantly impact the accuracy of regression models.

### Handling Specific Crops

Separate dataframes for cereals, maize, and wheat were created and processed to ensure that each crop's unique characteristics and data discrepancies were adequately addressed. For example, wheat data was corrected to include production values for 'wheat' where only 'winter wheat' or 'spring wheat' were recorded, ensuring a comprehensive representation of wheat production.

### Filtering Regions with Excessive Zero Values

Regions with more than 50% of records containing zero values for production, hectares, and yield were identified and filtered out. This approach helps to focus the analysis on regions with reliable data, improving the model's predictive accuracy.

### Linear Interpolation and Filling Missing Values

Linear interpolation followed by forward and backward filling was applied within each group of 'country' and 'admin1'. This methodological approach to imputing missing values preserves the temporal trends in the data, essential for time-series analysis in agriculture.

### Final Adjustments

The datasets for maize, cereals, and wheat were concatenated into one, and zero values were replaced with NaN for 'production (tonnes)' and 'hectares (ha)' to prepare for final imputation. Yield values that were zero were recalculated to ensure consistency across the dataset.

## <span>Ⅲ.</span> Conclusion

The preparation of the 20th-century food crop statistics dataset involved a series of meticulous steps designed to enhance the dataset's quality and suitability for machine learning models, specifically a Decision Tree Regressor. By cleaning the data, imputing missing values, and ensuring consistency across different crops and regions, we've laid a solid foundation for analyzing agricultural trends and predicting future productivity. The final dataset, saved as `FINAL.csv`, is now ready for in-depth analysis and modeling, promising insights into the factors driving crop production over the last century.
