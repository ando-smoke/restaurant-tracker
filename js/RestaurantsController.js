restaurantsTracker.controller("RestaurantsCtrl",
  function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.foodTypes= ["Chinese", "Italian", "French", "Indian", "Mexican",
    "Steak and Seafood"];
  $scope.locations = ["Downtown", "Northeast PDX", "Northwest PDX",
    "Pearl District", "Southeast PDX", "Southwest PDX"];
  $scope.priceRanges = ["$", "$$", "$$$"];

  $scope.addRestaurant = function() {
    $scope.restaurants.push({
      name: $scope.restaurantName,
      foodType: $scope.foodType,
      location: $scope.restaurantLocation,
      priceRange: $scope.priceRange
    });

    $scope.restaurantName = null;
    $scope.foodType = null;
    $scope.restaurantLocation = null;
    $scope.priceRange = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
