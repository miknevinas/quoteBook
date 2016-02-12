angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();

	$scope.addQuote = function(addObj) {
		dataService.addData(addObj);
	}


	$scope.removeQuote = function(quote) {
		dataService.removeData(quote);
	}


	$scope.filterData = function(author) {
		dataService.filterData(author);
	}
    
});