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

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
      expect(typeof sayHello()).toBe('string') ;
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should return 'Hello, Jane'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it("should return 'Hello, Alex'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex")
    });
    it("should return 'Hello, Pat'", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat")
    });
    it("should return 'Hello, World' when empty string is passed", function () {
        expect(sayHello("")).toBe("Hello, World")
    });
    it("should return 'Hello, World' when true is passed", function () {
        expect(sayHello(true)).toBe("Hello, World")
    });
    it("should return 'Hello, World' when false is passed", function () {
        expect(sayHello(false)).toBe("Hello, World")
    });

});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return true if 5 is passed', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true if the string "5" is passed', function () {
        expect(isFive(5)).toBe(true)
    });

});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return true if input is even number', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should be true if -4 is passed', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should be false if 3 is passed', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should be false if "banana" is passed', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should be true if "8" is passed', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should be false if 3 is passed', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should be false if a boolean is passed', function () {
        expect(isEven(true)).toBe(false)
        expect(isEven(false)).toBe(false)
    });
    it('should be false if no string is passed', function () {
        expect(isEven("")).toBe(false)
    });
})

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('should be true if "A" is passed', function () {
        expect(isVowel("A")).toBe(true)
    });
    it('should be true if "a" is passed', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should be false if "y" is passed', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should be false if 4 is passed', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should be false if true is passed', function () {
        expect(isVowel(true)).toBe(false)
    });
    it('should be false if false is passed', function () {
        expect(isVowel(false)).toBe(false)
    });
    it('should be false if "banana" is passed', function () {
        expect(isVowel("banana")).toBe(false)
    });
    it('should be false if empty string is passed', function () {
        expect(isVowel("")).toBe(false)
    });

})

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function')
    });
    it('the sum of 2 and 3 shoul be 5', function () {
        expect(add(2, 3)).toBe(5)
    });
    it('the sum of 3 and -9 should be -6', function () {
        expect(add(3, -9)).toBe(-6)
    });
    it('the sum of 5 and 6 should be 11', function () {
        expect(add(5, 6)).toBe(11)
    });


})

