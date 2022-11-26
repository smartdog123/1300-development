# Development

### Link to Deployed Website

If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

This is a grocery App. It allows user to browser different categories of items, sort the items by price and popularity, filter out onsale items and add/remove item from the shopping cart. The App is straightforward and easy to use.

### Usability Principles Considered

- User control and freedom: It's common for user for perform wrong actions. There is a "All" choice for both two filters to make sure it can revert back to the original state without refreshing the page.

- The application provides button to easily add and remove items from the shopping cart. Also, the states of each item (how many items are in the shopping cart) and the total price are kept consistent across the page.

- The sorting and filter are clearly indicated, as well as their options.

- The shopping cart and the filter section is sticked when user scolls the page, improving the memorability.

### Organization of Components

- FilteredList: It holds the filter state and implements the filter and sorting functions, and it passes the filtered product array to **DisplayList**.

* DisplayList: It maps each product to display it using **MenuItem**. It holds the state of the shopping cart, and implements the logic for adding and removing items from the shopping cart.

* MenuItem: This is the component for each individual product. It includes the product information (name, image, etc.) and two buttons for add and remove.

* Cart: This is the component for the shopping cart. It contains a list of **CartItem**.

* CartItem: This is the component for each individual item in the shopping cart.

### How Data is Passed Down Through Components

- The product data is read from a JSON file by **App.js**. And it is passed down: App -> FilteredList -> DisplayList -> MenuItem.

* The filter state is created by **FilteredList.js**, and it is used by the component itself.

- The shopping cart state is created by **DisplayList.js**. The function for add and remove item is passed down to **MenuItem**. And the cart state is passed down to **Cart** and then to **CartItem**.

### How the User Triggers State Changes

- Filter and sorting: When user clicks the filter or sorting button, it triggers a change to the filter state using **this.setState**. Then **FilteredList** will re-filter the product array and pass it down to **DisplayList**.

* Shopping cart: When user clicks the add or remove button of a product, it triggers a change to the shopping cart state using **this.setState**. Basically, the previous state is read, and we update the item count and total price, so the shopping cart is updated and kept consistent.
