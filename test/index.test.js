describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('http://192.168.7.60:5050/#!/');
    });

    it('should render specific links', function() {

      element.all(by.xpath('//*[@class="btn btn-info"]')).click();
      
      expect(browser.getCurrentUrl()).toBe('http://192.168.7.60:5050/#!/tienda');
                                            
      
    });

  });

});
