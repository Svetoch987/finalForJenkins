describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('http://192.168.7.60:5050/#!/');
    });

    it('should render specific links', function() {

      element.all(by.xpath('//*[@class="btn btn-info"]')).click();
      
      browser.wait(function() {
        return browser.getCurrentUrl().then(function(url) {
                                            expect(url).toBe('http://192.168.7.60:5050/#!/tienda');
                                            });
      }, 5000, "URL hasn't changed"); 
      
    });

  });

});
