(function(){

    'use strict';

     angular.module("storeApp")
     /**
      * @ngdoc filter
      * @name priceMin
      * @description all filters are a function
      */
    .filter("priceMin",filterMinPriceProducts)
    /**
     * @ngdoc filter
     * @name priceMax
     * @description all filters are a function
     */
    .filter("priceMax",filterMaxPriceProducts)
    /**
     * @ngdoc filter
     * @name category
     * @description all filters are a function
     */
    .filter("category",filterCategories)
    /**
     * @ngdoc filter
     * @name available
     * @description all filters are a function
     */
    .filter("available",filterAvailableProducts)
    /**
     * @ngdoc filter
     * @name bestSeller
     * @description all filters are a function
     */
    .filter("bestSeller",filterBestSellerProducts);

  function filterMinPriceProducts(){
      return function (input,minPrice) {
          input = input || "";
          var inputFiltered = [];

          if(minPrice!=undefined && minPrice!=""){


              angular.forEach(input,function(item) {


                  if(item.price>=minPrice){
                     inputFiltered.push(item);
                 }

              })

          return inputFiltered;

          }
          else{

          return input;

          }

      }
  }

  function filterMaxPriceProducts(){
      return function (input,maxPrice) {
          input = input || "";
          var inputFiltered = [];

          if(maxPrice!=undefined && maxPrice!=false){

              angular.forEach(input,function(item) {

                  if(item.price <= maxPrice){
                     inputFiltered.push(item);
                 }

              })

          return inputFiltered;

          }
          else{

          return input;

          }

      }
  }

  function filterCategories(){
      return function (input,category) {
          input = input || "";
          var inputFiltered = [];

          if(category!=undefined){

          angular.forEach(input,function(item){
              angular.forEach(item.categories,function(itemCategory) {

                 if(itemCategory==category){
                     inputFiltered.push(item);
                 }
              });

              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }

  function filterAvailableProducts(){
      return function (input,available) {
          input = input || "";
          var inputFiltered = [];

          if(available!=undefined){

          angular.forEach(input,function(item){

                 if(item.available==available){
                     inputFiltered.push(item);
                 }

              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }

  function filterBestSellerProducts(){
      return function (input,bestSeller) {
          input = input || "";
          var inputFiltered = [];

          if(bestSeller!=undefined){

          angular.forEach(input,function(item){

                 if(item.best_seller==bestSeller){
                     inputFiltered.push(item);
                 }

              })
          return inputFiltered;
          }
          else{
              return input;
          }
      }
  }

})();
