restaurantsTracker.controller("RestaurantsCtrl",
  function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
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
});
