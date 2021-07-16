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

describe ("isFive", function (){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return a true when passed the number 5 as an argument', function(){
        expect(isFive(5)).toBe(true);
    });
    it('should return a true when passed the string 5 as an argument', function(){
        expect(isFive("5")).toBe(true);
    });
})
describe("isEven", function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the number 2 as an argument', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed the string 8 as an argument', function(){
        expect(isEven("8")).toBe(true);
    });
    it('should return true when passed the number -4 as an argument', function(){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3 as an argument', function(){
        expect(isEven(-3)).toBe(false);
    });
    it('should return false when passed the string banana as an argument', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('should return false when passed Infinity as an argument', function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed the boolean True as an argument', function(){
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed the boolean false as an argument', function(){
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called with no argument', function(){
        expect(isEven()).toBe(false);
    });
})

describe('isVowel',function(){
    it('should be a defined function', function(){
       expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean when called',function(){
       expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when passed the string "a" as an argument',function(){
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed the string "A" as an argument',function(){
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed the string "y" as an argument',function(){
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when passed the number 4 as an argument',function(){
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed the boolean true as an argument',function(){
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed the boolean false as an argument',function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed the string banana as an argument',function(){
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false when called with no argument',function(){
        expect(isVowel()).toBe(false);
    });
})
describe ("add", function (){
    it('should be a defined function', function(){
        expect(typeof add).toBe('function');
    });
    it('should return the number 5 when passed the numbers 2 and 3 as arguments', function(){
        expect(add(2,3)).toBe(5);
    });
    it('should return the number -12 when passed the numbers -3 and -9 as arguments', function(){
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return the number 11 when passed the string 5 and number 6 as arguments', function(){
        expect(add("5",6)).toBe(11);
    });
    it('should return the number 6 when passed the strings -4 and 10 as arguments', function(){
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN when passed the strings banana and split as arguments', function(){
        expect(add("banana","split")).toBeNaN();
    });
    it('should return NaN when passed the number 2 and string apples as arguments', function(){
        expect(add(2,"apples")).toBeNaN();
    });
    it('should return NaN when called with no argument',function(){
        expect(add()).toBeNaN();
    });
})