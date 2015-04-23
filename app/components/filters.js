'strict';

//Filters through all the recipes to only return the ones containting the same keyword
angular.module('firstAngularAppFilters', []).filter('keyword', function() {
  return function(items, searchString) {
    var filteredItems = [];
    console.log('filter ' + items);
    for(var i = 0; i < items.length; i++)
    {
      var item = items[i];
      console.log('filt ' + item);
      var itemName = item.keyword.toLowerCase();
      if(itemName.indexOf(searchString.toLowerCase()) > -1)
      {
       filteredItems.push(item);
     }
   }
   
   return filteredItems;
 };
})
//Filters through all the recipes to only return the ones containting the equalSearchString
.filter('equalSearchString', function() {
  return function(items, searchString) {
    var filteredItems = [];
    console.log('filter ' + items);
    for(var i = 0; i < items.length; i++)
    {
      var item = items[i];
      console.log('filt ' + item);
      var itemName = item.name.toLowerCase();
      if(itemName.indexOf(searchString.toLowerCase()) > -1)
      {
       filteredItems.push(item);
     }
   }
   
   return filteredItems;
 };
});




