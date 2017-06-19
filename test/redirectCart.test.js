describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('http://192.168.7.60:5050/#!/');
    });

    it('should redirect to cart page', function() {

      element.all(by.xpath('//*[@class="fa fa-shopping-cart"]')).click();
      
      expect(browser.getCurrentUrl()).toBe('http://192.168.7.60:5050/#!/carroCompras');
    });

  });

});
