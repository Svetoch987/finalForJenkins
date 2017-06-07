describe('storeApp', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('storeApp'));

  // Test the controller
  describe('storeController', function() {
    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('storeController');
    }));

    it('should create 7 products', function() {
      expect(ctrl.query.length).toBe(7);
    });

  });

});
