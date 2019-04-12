const countries = require("./countries");

test("Empty call response is empty string", () => {
    expect(countries.find()).toEqual([]);
});

test("Array is never more than 4", () => {
    expect(countries.find("a")).toHaveLength(4);
});

test("Search to be case insensitive", () => {
    expect(countries.find("AL")).toEqual(countries.find("al"));
});

test("No matches is empty array", () => {
    expect(countries.find("hoihdqqa")).toEqual([]);
});
