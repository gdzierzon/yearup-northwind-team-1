const categoryDropdown = document.getElementById('category');
const productsList = document.getElementById('products-list');
const data = {
  "categories": [
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
        
      },
      {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
      },
      {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
      },
      {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
      },
      {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
      },
      {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
      },
      {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
      },
      {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
      }
  ],
  "products": [
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
        
      },
      {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
      },
      {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
      },
      {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
      },
      {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
      },
      {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
      },
      {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
      },
      {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
      }
  ]
};

// Function to fetch categories and populate dropdown
function populateCategories() {
  data.categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.name;
    categoryDropdown.appendChild(option);
  });
}

// Function to filter products by selected category
function fetchProductsByCategory(categoryId) {
  const products = data.products.filter(product => product.categoryId == categoryId);
  return products;
}

// Function to display products in the list
function displayProducts(products) {
  productsList.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.textContent = `Product ID: ${product.id}, Name: ${product.productName}`;
    productsList.appendChild(productElement);
  });
}

// Event listener for fetch button click
function fetchProducts() {
  const selectedCategoryId = categoryDropdown.value;
  const products = fetchProductsByCategory(selectedCategoryId);
  displayProducts(products);
}

// Populate categories when the page loads
populateCategories();
