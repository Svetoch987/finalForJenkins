describe("creating cart", function() {
    var $rootScope;
    var $controller;
    beforeEach(module("cart"));
    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $scope = $rootScope.$new();

    }));
    beforeEach(inject(function($controller) {
        ctrl = $componentController('cartController');
    }));

    it('should create cart with 0 items in it', function() {
      expect(ctrl.items_Cart.length).toBe(0);
    });

}); 
/*
describe('creating cart', function() {

  beforeEach(module('cart'));

  it('should create cart with 0 items in it', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('cartController', {$scope: scope});

    expect(scope.items_Cart.length).toBe(0);
  }));

});
