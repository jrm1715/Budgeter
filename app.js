
// Budget Controller
var budgetController = (function() {
  //Some Code
})();

// UI Controller
var UIController = (function() {
  // Some code
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

  var ctrlAddItem = function() {
    // TODO 1. Get the field input data
    //      2. Add the item to the budget Controller
    //      3. Add the item to the UI
    //      4. Calculate budget
    //      5. Display the budget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
