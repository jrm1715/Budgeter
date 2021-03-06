
// Budget Controller
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },

    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      // Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // Push it into our data structure
      data.allItems[type].push(newItem);

      // Return the new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };

})();

// UI Controller
var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
         type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
         description: document.querySelector(DOMStrings.inputDesc).value,
         value: document.querySelector(DOMStrings.inputValue).value,
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();
  var setupEventListeners = function() {
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }

    });
  };

  var ctrlAddItem = function() {
    var input, newItem;

    // TODO 1. Get the field input data
    var input = UICtrl.getInput();

    //      2. Add the item to the budget Controller
    var newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    //      3. Add the item to the UI
    //      4. Calculate budget
    //      5. Display the budget on the UI
  };

  return {
    init: function() {
    setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();
