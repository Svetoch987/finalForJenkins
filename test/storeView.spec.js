describe('storeApp', function() {

  beforeEach(module('storeApp'));

  // Test the controller
  describe('storeController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('storeController');
    }));

    it('should create 7 products', function() {
      expect(ctrl.products.length).toBe(7);
    });

  });

});
