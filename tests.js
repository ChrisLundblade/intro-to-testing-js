// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello',function(){
    it('should be a defined function', function(){
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when passed "Jane" as a argument',function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex" as a argument',function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat" as a argument',function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when no argument is passed',function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when "" is passed as an argument',function(){
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return "Hello World!" when null is passed as an argument',function(){
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello World!" when the boolean true is passed as an argument',function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello World!" when the boolean false is passed as an argument',function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello World!" when the number 5 is passed as an argument',function(){
        expect(sayHello(5)).toBe("Hello, World!");
    });
    it('should return "Hello World!" when the number 2.3 is passed as an argument',function(){
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
})