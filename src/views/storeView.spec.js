describe('storeApp', function() {

  describe('storeController', function() {

    beforeEach(function() {
      browser.get('storeView.html');
    });

    it('should check the items in shop', function() {
      var itemList = element.all(by.repeater('product in query'));

      expect(itemList.count()).toBe(7);
    });

  });

});
