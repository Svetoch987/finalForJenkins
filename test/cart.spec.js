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

     it('should create cart with 0 items in it', inject(function($componentController) {

      expect(ctrl.cartCtrl.items_Cart.length).toBe(0);
    }));

});
