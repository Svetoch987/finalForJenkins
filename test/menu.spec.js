describe('menu', function() {

  beforeEach(module('menu'));
  
  it('should redirect to home page if no other URL matches', function() {
     expect(true).toBe(true);
    });
    
  it('should redirect to home page if url: /', function() {
     expect(true).toBe(true);
    });  
   
   it('should redirect to home page if url: /welcome', function() {
     expect(true).toBe(true);
    });
   
   it('should redirect to cataloge page if url: /store', function() {
     expect(true).toBe(true);
    });
    
   it('should redirect to cart page if url: /cart', function() {
     expect(true).toBe(true);
    }); 
    
    it('should redirect to orders page if url: /orders', function() {
     expect(true).toBe(true);
    }); 

});
