# Bezt Assignment : Product Page SPA

The UI mockup is in **@Test-Screens** directory. There are 3 parts:

1. [product-page.png](./@Test-Screens/product-page.png)
2. [product-quickview-popup.png](./@Test-Screens/product-quickview-popup.png)
3. [card-sidebar.png](./@Test-Screens/cart-sidebar.png)

Use https://fakestoreapi.com/docs for API data (Only use routes which are needed). API route to be used:

- Get all products
- Get a single product
- Sort results
- Get all categories
- Get in category

## Features

- Landing page (product-page.png):
  - It is the product listing page. (Avoid navigation menu, logo, search, login and signup)
  - Each product would have add to cart button.
  - On product click, product detail popup (product-quickview-popup.png) would appear consisting of basic details of the product.
  - On page refresh, the cart data should remain persisted. (use localStorage)
- Cart:
  - Cart button would be the part of the UI. Use any free icon.
  - Cart button would show the no. of products in the cart.
  - On click of cart button, show card-sidebar.png.
  - Implement cart with localStorage and do not consider using the API
- Filters (left sidebar):
  - Order select box (Asc, Desc)
  - Product categories radio buttons
  - Filter should use the API for sort and category selection.
  - The selected category would be shown before the product listing. Default is 'All Products'

### Tech to be used

1. Redux: For state management
2. MUI: CSS library.
3. Use `fetch` API for consuming data from the above API.
4. _Do not use anything else other than the mentioned above._
5. The page is not necessary to be exaclty the UI, leverage MUI components wherever needed.
