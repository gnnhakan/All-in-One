angular.module("mydemo.directives", [])
.directive("cartSummery",function (cartService){
    return {
        restrict: 'E',
        templateUrl: "CartSummary"
    }
});