# Bezt Assignment : Product Page SPA

The UI mockup is in @Test-Screens directory. There are 3 parts -
- product-page.png
- product-quickview-popup.png
- card-sidebar.png
- https://fakestoreapi.com/docs  : Use this API for the data (Only use routes which are needed)
- API route to be used : Get all products, Get a single product, Sort results, Get all categories, Get in category.

## Features
- Landing page is the product listing page
- Avoid navigation menu, logo, search, login and signup
- Cart button would be the part of the UI. Use any free icon.
- The left sidebar -
    - Order select box (Asc, Desc)
    - Product Category radio buttons
- Cart button would show the no. of products in the cart.
- On click of cart button, show card-sidebar.
- Implement cart with localStorage and do not consider using the API
- On product click, product detail popup would appear consisting of basic details of the product.
- Each product would have add to cart button.
- On page refresh, the cart data should remain persisted. (use localStorage)
- Filter should use the API for sort and category selection.
- The selected category would be shown before the product listing. Default is 'All Products'

### Tech to be used
1. Redux : For state management
2. MUI : CSS library.
3. Use fetch API for consuming data from the above API.
3. Do not use anything else other than the mentioned above.
4. The page is not necessary to be exaclty following the UI, leverage MUI components wherever needed.
