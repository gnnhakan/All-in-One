var myapp = angular.module('app', [])
.constant("ProductsUrl", "http://localhost:50009/mvcHome/Index2") // restapi url
.constant("CategoriesUrl", "http://localhost:49268/api/categories/")
myapp.controller("ProductController", function ($scope, $http, $ProductsUrl) {
    $scope.getProducts = function () {
        $scope.data = {};
        $http.get(ProductsUrl)
         .then(function (response) {
             $scope.result = "Success";
             $scope.data.products = response;
         }, function (response) {
             $scope.result = "Error";
             $scope.data.products = response;
         });
    }
});

myapp.controller("CategoriesController", function ($scope, $http, CategoriesUrl) {
    $scope.getProducts = function () {
        $scope.data = {};
        $http.get(CategoriesUrl).
        success(function (data) {
            $scope.data.categories = data;
        }).error(function (error) {
            $scope.data.error = error;
        });
    }
    $scope.getProducts();

});