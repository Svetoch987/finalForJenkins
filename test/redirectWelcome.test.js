describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('https://onlineshop.andersenlab.com/#!/');
    });

    it('should redirect to cataloge page', function() {

      element.all(by.xpath('//*[@class="fa fa-code"]')).click();
      
      expect(browser.getCurrentUrl()).toBe('https://onlineshop.andersenlab.com/#!/tienda');
    });

  });

});
