describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('https://onlineshop.andersenlab.com/#!/');
      browser.sleep(2000);
    });

    it('should show cataloge page', function() {

      element.all(by.xpath('//*[@class="btn btn-info"]')).click();
      
      expect(browser.getCurrentUrl()).toBe('https://onlineshop.andersenlab.com/#!/tienda');
    });

  });

});
