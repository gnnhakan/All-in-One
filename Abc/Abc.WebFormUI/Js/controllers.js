angular.module("demoapp.controllers", ["demoapp.services"])
.constant("ProductsUrl", "http://localhost:51601/api/Products/") // restapi url
.constant("CategoriesUrl", "http://localhost:51601/api/Categories/")
.controller("CategoriesController", function ($scope, $http, CategoriesUrl) {
    $scope.getCategories = function () {
        $scope.catagories = {};
        $http.get(CategoriesUrl).
        success(function (data) {
            $scope.catagories = data;
        }).error(function (error) {
            $scope.catagories.error = error;
        });
    }

    $scope.getCategoryCss = function (categoryId) {

        return $scope.currentCategory == categoryId ? "list-group list-group-item-success" : "list-group-item" ;
    }
    $scope.getCategories();

})

.controller("ProductsController", function ($scope, $http, ProductsUrl, cartService) {
    $scope.getProducts = function (categoryId) {
        //console.log(categoryId)
        $scope.currentCategory = null;
        $scope.newUrl = ProductsUrl;
        if (categoryId)
        {
            $scope.currentCategory= categoryId;
            newUrl = ProductsUrl + "/"+categoryId;
        }
        $scope.products = {};
        $http.get(ProductsUrl).
        success(function (data) {
            $scope.products = data;
        }).error(function (error) {
            $scope.products.error = error;
        });
    }
    $scope.AddProductToCart = function (product) {
        cartService.addProduct(product);
    }
    $scope.getProducts();
})
.controller("ProductsController2", function ($scope, $http, ProductsUrl) {
    $scope.getProducts = function (categoryId) {
        //console.log(categoryId)
        $scope.currentCategory = null;
        $scope.newUrl = ProductsUrl;
        if (categoryId) {
            $scope.currentCategory = categoryId;
            newUrl = ProductsUrl + "/" + categoryId;
        }
        $scope.products = {};
        $http.get(ProductsUrl).
        success(function (data) {
            $scope.products = data;
        }).error(function (error) {
            $scope.products.error = error;
        });
    }
    $scope.getProducts();
})