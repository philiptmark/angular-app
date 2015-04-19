
angular.module('firstAngularAppFilters', []).filter('equalSearchString', function() {
  return function(items, searchString) {
  	var filteredItems = [];
  	for(var i = 0; i < items.length; i++)
  	{
		var item = items[i];
		
		var itemName = item.name.toLowerCase();
		console.log(itemName);
		console.log(itemName.indexOf(searchString.toLowerCase()));
		if(itemName.indexOf(searchString.toLowerCase()) > -1)
		{
			filteredItems.push(item);
			console.log('yay ' + itemName);
		}
  	}
  	
    return filteredItems;
  };
});