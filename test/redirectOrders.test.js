describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('https://onlineshop.andersenlab.com/#!/');
      browser.sleep(2000);
    });

    it('should redirect to orders page', function() {

      element.all(by.xpath('//*[@class="fa fa-money"]')).click();
      
      expect(browser.getCurrentUrl()).toBe('https://onlineshop.andersenlab.com/#!/acerca');
    });

  });

});
