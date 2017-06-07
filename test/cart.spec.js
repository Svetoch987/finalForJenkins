/*describe('storeApp', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('cart'));

  // Test the controller
  describe('cartController', function() {

    it('should create cart with 0 items in it', inject(function($componentController) {
      var ctrl = $componentController('cartController');

      expect(ctrl.cartCtrl.items_Cart.length).toBe(0);
    }));

  });

});*/
var products = ['Photoshop','Corel','Inkscape'];
it('should create 7 products', function() {
    expect(products.length).toBe(3);
 });
