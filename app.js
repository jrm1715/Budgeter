
// Budget Controller
var budgetController = (function() {
  //Some Code
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
    // TODO 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);

    //      2. Add the item to the budget Controller
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
