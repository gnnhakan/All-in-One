angular.module("demoapp.services", [])
.factory("cartService", function () {
    var cartData = [];
    return {
        addProduct: function (product) {
            var existedItem = false;
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].id = product.productID) {
                    cartData[i].count++;
                    existedItem = true;
                    break;
                }
            }
            if (!existedItem) {
                cartData.push({
                    count: 1,
                    id: productID,
                    unitPrice: unitPrice,
                    name: productName
                })
            }
          },
        getProducts : function()
        {
            return cartData;
        },
        removeProduct : function(id){
                for (var i=0; i<cartData.length; i++)
                {
                    if(cartData[i].id==id)
                        cartData.splice(i, 1);
                    break;
                }
        }
    }
});