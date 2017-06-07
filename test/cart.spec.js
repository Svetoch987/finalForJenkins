describe('cartItems', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('cart'));

  // Test the controller
  describe('cartController', function() {

    it('should create cart with 0 items in it', inject(function($componentController) {
      var ctrl = $componentController('phoneList');

      expect(ctrl.cartCtrl.items_Cart.length).toBe(0);
    }));

  });

});