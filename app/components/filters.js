
angular.module('firstAngularAppFilters', []).filter('equalSearchString', function() {
  return function(items, searchString) {
  	var filteredItems = [];
  	for(var i = 0; i < items.length; i++)
  	{
		var item = items[i];
		
		var itemName = item.name.toLowerCase();
		if(itemName.indexOf(searchString.toLowerCase()) > -1)
		{
			filteredItems.push(item);
		}
  	}
  	
    return filteredItems;
  };
});