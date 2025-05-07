# E-commerce Data Visualization Dashboard

This project is an interactive data visualization dashboard built using D3.js, showcasing various aspects of e-commerce product performance data.

## Visualizations Included:

- **Category Performance Bar Chart:** Displays the average product rating for different categories.
- **Discount vs. Return Rate Scatter Plot:** Visualizes the relationship between product discount rates and their return rates.
- **Delivery Time Distribution Histogram:** Shows the frequency distribution of days taken to deliver products.
- **Reviews vs. Rating Scatter Plot:** Explores the correlation between the number of reviews a product receives and its average rating.
- **Product Price vs. Rating Scatter Plot:** Illustrates the relationship between product price and product rating, with circle size indicating the number of reviews and color representing the discount rate.
- **Product Table:** Presents a sample of the raw e-commerce product performance data in a table format.

## How to View:

1.  Ensure you have a web browser installed.
2.  Open the `index.html` file located in the `ecommerce/` directory in your web browser.
3.  Navigate through the different visualizations using the links provided on the dashboard page.

## Data Source:

download at https://www.kaggle.com/datasets/efeyldz/e-commerce-product-performance-dataset
The visualizations are based on the `ecommerce_product_performance.csv` file located in the `archive/` directory.

## Project Structure:

- `.gitignore`: Specifies intentionally untracked files that Git should ignore.
- `archive/`: Contains the raw data file (`ecommerce_product_performance.csv`).
- `images/`: Contains images used in the project (though not directly referenced in the provided HTML).
- `index.html`: The main dashboard page with links to all visualizations.
- `category-rating-bar-chart.html`: HTML file for the Category Performance Bar Chart.
- `discount-return.html`: HTML file for the Discount vs. Return Rate Scatter Plot.
- `distribution-days-deliver.html`: HTML file for the Delivery Time Distribution Histogram.
- `reviews-rating.html`: HTML file for the Reviews vs. Rating Scatter Plot.
- `scatter.html`: HTML file for the Product Price vs. Rating Scatter Plot.
- `table.html`: HTML file for the Product Table.
- `sample-chart/`: Contains sample chart files (not part of the main dashboard).
- `txt/`: Contains text files (ignored by git).
