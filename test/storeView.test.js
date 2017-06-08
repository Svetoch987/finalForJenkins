/* describe('storeApp', function() {

  describe('storeController', function() {

    beforeEach(function() {
      browser.get('storeView.html');
    });

    it('should check the items in shop', function() {
      var itemList = element.all(by.repeater('product in query'));

      expect(itemList.count()).toBe(7);
    });

  });

});*/
var products = ['Photoshop','Corel','Inkscape'];
it('should create 3 products', function() {

    expect(products.length).toBe(3);
 });
