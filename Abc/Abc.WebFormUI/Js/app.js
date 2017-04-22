var myapp = angular.module('app', [])
.constant("ProductsUrl", "http://localhost:51601/api/Products/") // restapi url
.constant("CategoriesUrl", "http://localhost:51601/api/Categories/")

myapp.controller("CategoriesController", function ($scope, $http, CategoriesUrl) {
    $scope.getCategories = function () {
        $scope.catagories = {};
        $http.get(CategoriesUrl).
        success(function (data) {
            $scope.catagories = data;
        }).error(function (error) {
            $scope.catagories.error = error;
        });
    }
    $scope.getCategories();
    
});

myapp.controller("ProductsController", function ($scope, $http, ProductsUrl) {
    $scope.getProducts = function () {
        $scope.products = {};
        $http.get(ProductsUrl).
        success(function (data) {
            $scope.products = data;
        }).error(function (error) {
            $scope.products.error = error;
        });
    }
    $scope.getProducts();

});