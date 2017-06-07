describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should render specific links', function() {

      element.all(by.css('ul .sidebar-nav')).last().click();
      expect(browser.getLocationAbsUrl()).toBe('./src/views/about.html');
    });

  });

});