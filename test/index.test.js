describe('storeApp', function() {

  describe('storeMenuController', function() {

    beforeEach(function() {
      browser.get('http://192.168.7.60:5050/#!/');
    });

    it('should render specific links', function() {

      element.all(by.css('ul .sidebar-nav')).last().click();
      expect(browser.getLocationAbsUrl()).toBe('./src/views/about.html');
    });

  });

});
/*var products = ['Photoshop','Corel','Inkscape'];
it('should create 3 products', function() {

    expect(products.length).toBe(3);
 }); */
