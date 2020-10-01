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
    // getSelectors
      // return UISelectoes

// App Controller(ItemCtrl, UICtrl)
  // loadEventListeners (load add event listeners)
  // itemAddSubmit is event of add button
    // check for name and calories ? 
      // const newItem is return from addItem
  // Public methods
    // init
      // Fetch items from data structure
      // populate list with items
      // load event listeners


// Initialize App