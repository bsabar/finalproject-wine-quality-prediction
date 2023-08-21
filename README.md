# Demystifying ML - Predicting Wine Quality and Color - Final Project

## Description 
In this collaborative project, our team set out to explore the predictive capabilities of machine learning in the context of wine quality and color. Leveraging a diverse set of chemical attributes associated with wines, we aimed to develop models capable of predicting both wine quality and color. Our goal was to uncover the chemical factors that contribute most significantly to wine quality and color while assessing the effectiveness of various machine learning algorithms in making accurate predictions. Through this project, we aimed to offer insights into the optimization of wine production processes and contribute to the broader understanding of the interplay between chemical attributes and wine characteristics.

Wine Quality:

- How accurately can the machine learning model predict wine quality based on the selected chemical factors?
- Are there specific chemical factors that consistently lead to higher or lower wine quality predictions?
- Can the machine learning model provide insights into the optimal ranges of chemical factors that result in the highest wine quality predictions?
- How do different machine learning algorithms compare in terms of their accuracy in predicting wine quality?
- Could the model's predictions be used to guide the wine-making process for quality enhancement?
- Are there certain chemical factor interactions that have a significant impact on wine quality but might not be immediately evident?

Wine Color:

- What are the main determinants of wine color, and how accurately can the model predict the color based on chemical attributes?
- Does the model perform differently in predicting the color of red and white wines?
- Can the model identify specific chemical factors that strongly influence the color prediction, and are these factors similar or distinct for red and white wines?
- How well can the model generalize its predictions to wines with chemical attributes not present in the training data?
- Could the color prediction model potentially aid winemakers in maintaining desired wine colors consistently across batches?
- Are there any challenges or limitations in predicting wine color compared to predicting wine quality?
These questions should help guide your exploration of both wine quality and color prediction using machine learning.

## Tools Used
- `Python Pandas`
- `Python Matplotlib`
- `Javascript`
- `HTML`
- `JS Plotly`
- `Seaborn`
- `ML Models`

## Contributors
* `Sophia Felix` -- @sophiafelix1
* `Micah Galbadores` -- @micahrivs
* `Karina Quintana` -- @kquint031
* `Beethoven Sabar` -- @bsabar
* `Ashley Song` -- @ashleyysongg
* `Nicholas Wetherell`-- @LaikaBoss10

## Mini Groups
- Data & Data Delivery  -- Ashley & Beethoven
- ML -- Nick & Micah
- Visualizations -- Karina & Sophia
- Slide deck, documentation, repo -- all
  
## REPO & Dates
- `REPO`: https://github.com/bsabar/finalproject-wine-quality-prediction
- `Project Last Updated:` Monday, 08/21/2023

## Data Sources
|Name|Type|Description|Website|
|---|---|---|---|
|Wine Quality|CSV|Two datasets related to red and white vinho verde wine samples from the North of Portugal|[https://www.kaggle.com/datasets/equilibriumm/sleep-efficiency](https://archive.ics.uci.edu/dataset/186/wine+quality)|
|Spanish Wine Quality Dataset |CSV|This dataset is related to red variants of Spanish wines. The dataset describes several popularity and description metrics and their effect on its quality.|https://www.kaggle.com/datasets/fedesoriano/spanish-wine-quality-dataset|

## PowerPoint Presentation
[Link to Slide Deck for more info] (https://docs.google.com/presentation/d/1vFakHtO5zMKndyLEQMZ0AD-M528y0c00CQf-maIvX-I/edit?usp=sharing)

## Data & Data Delivery (Ashley & Beethoven)
- Used `python pandas` and `python pathlib` to import and load the data in DataFrame
- Used `delimiter` to separate each column neatly 
- Added new “color” columns to distinguish each dataset 
- Merge the two datasets together
- Utilize `pd.get_dummies` for converting categorical variables into a set of binary columns to differentiate the wine color
- Utilize `insull().sum()` in order to check the dataset for any null values to further clean up the datasets

## Machine Learning (Nick & Micah)
- Implementation and evaluation of various machine learning algorithms for quality and color predictions


## Visualization (Karina & Sophia)

- The project's web page is structured using HTML and Bootstrap for styling.
- We used javascript to set images and the descriptions.
- CSS was used to adjust the style.
  

## Results:
Our findings revealed that specific chemical factors, including acidity, alcohol content, and volatile acidity, held a significant influence on both wine quality and color predictions. Conversely, certain factors exhibited minimal impact on these predictions. The Random Forest algorithm emerged as the most accurate model for predicting wine quality, attaining an impressive accuracy rate. Similarly, the models for predicting wine color displayed notable accuracy, with distinctions in their predictions for red and white wines.

## Conclusion:
In conclusion, our collaborative project successfully demonstrated the effectiveness of machine learning in predicting wine quality and color. By unraveling the chemical factors driving these attributes, we contribute valuable insights to the wine industry. The models developed offer the potential for optimizing wine production processes, enhancing product quality, and providing winemakers with data-driven tools for decision-making.

## Future Directions:
Moving forward, we envision expanding this project by incorporating additional data sources, exploring the impact of weather conditions on wine attributes, and investigating the application of deep learning techniques for even more accurate predictions. This project serves as a foundation for further exploration and innovation in the realm of wine quality and color prediction using machine learning.
  
