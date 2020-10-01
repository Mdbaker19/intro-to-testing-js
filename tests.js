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


describe("sayHello", function(){
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when 'Jane' is called", function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when 'Alex' is called", function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when 'Pat' is called", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when true is passed", function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
});

describe("isFive", function(){
    it("should return true when passed 5", function(){
        expect(isFive(5)).toBe(true);
    });
    it("should return false when passed '5'", function(){
        expect(isFive("5")).toBe(false);
    });
    it("should return a boolean", function(){
        expect(typeof isFive()).toBe("boolean");
    });
})


describe("add", function(){
    it("should return 4 if 1 and 3 are passed through", function (){
        expect(add(1, 3)).toBe(4);
    });
    it("should return NaN if something other than a number is passed through for x and y", function(){
        expect(add("a", "Y")).toBe("NaN");
    });
    it("should return -12 when passed in -3 and -9", function(){
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return NaN if passed 'banana' and 2", function(){
        expect(add("banana", 2)).toBe("NaN");
    });
});

describe("double", function(){
    it("should return double the input", function(){
        expect(double(5)).toBe(10);
    });
});

describe("isEven", function(){
    it("should return true when passed 200", function(){
        expect(isEven(200)).toBe(true);
    });
    it("should return false when passed 201", function(){
        expect(isEven(201)).toBe(false);
    });
    it("should return false when passed 'whatAreYouDoingHere'", function (){
        expect(isEven("whatAreYouDoingHere")).toBe(false);
    });
    it("should return true when passed -4", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when passed 3", function (){
        expect(isEven(3)).toBe(false);
    });
    it("should return false when passed 'banana'", function(){
        expect(isEven("banana")).toBe(false);
    });
});

describe("isVowel", function (){
    it("should return true when passed 'a'", function(){
        expect(isVowel("a")).toBe(true);
    });
    it("should return false when passed 'k'", function(){
        expect(isVowel("k")).toBe(false);
    });
    it("should return true when passed 'A'", function (){
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed 'K'", function (){
        expect(isVowel("K")).toBe(false);
    });
    it("should return false when passed 'banana'", function (){
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when nothing is passed", function(){
        expect(isVowel()).toBe(false);
    });
});