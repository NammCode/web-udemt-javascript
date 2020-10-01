// Storage Controller 

// Item Controller
  // Item Constructor 
    // this.(id, name, calories)
  // Data Strucutre / State: data
    // (items, currentItem, totalCalories)
  // Public method
    // getItems 
      // return items
    // addItem(name, calories)
      // create ID, parse calo to int
      // create newitem with Item Constructor
      // Add item to items array in data
      // return newItem
    // logData (consoleLog data)

// UI Controller
  // const object UISelectors
  // Public method
    // populateItemList(items)
      // Loop through items
      // add li in html in each item
      // add html to ul
    // getItemInput
      // return input of name and calories
    // addListItem(item)
      // create li element
      // add class to li element
      // add id to li which is dynamic
      // add inner html to li (content and a)
      // add insert item (using insertAdjacentElement() method and 'beforeend' values)
    // clearInput
      // clear name and input (using value = '')
    // getSelectors
      // return UISelectors

// App Controller(ItemCtrl, UICtrl)
  // loadEventListeners (load add event listeners)
  // itemAddSubmit is event of add button
    // check for name and calories input
      // const newItem is return from addItem
      // add item to UI List
      // call clear input from UI
  // Public methods
    // init
      // Fetch items from data structure
      // populate list with items
      // load event listeners


// Initialize App