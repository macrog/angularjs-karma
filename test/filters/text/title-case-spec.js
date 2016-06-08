describe("titleCase", function () {

    beforeEach(function () {
        module('filters');

        inject(function ($injector) {
            $filter = $injector.get('$filter');
            filter = $filter('titleCase');
        });
    });
    it("Should return undefined when indefined passed in", function () {
        expect(filter(undefined)).toBeUndefined();
    });
    it("Should return null when null is passed in", function () {
        expect(filter(null)).toBeNull();
    });
    it("Should return blank string when blank string is passed in", function () {
        expect(filter("")).toEqual("");
    });
    it("Should change the case of lower case word", function () {
        expect(filter("gorge harrison")).toEqual("Gorge Harrison");
    });
    it("Should change the case of upper case word", function () {
        expect(filter("ABCD EFGH")).toEqual("Abcd Efgh");
    });
    it("Should change the case of random case word", function () {
        expect(filter("the AiSDSu ABCD EFGH")).toEqual("The Aisdsu Abcd Efgh");
    });
    it("Should cplay nice with normal phrase", function () {
        expect(filter("This Is A Control Room")).toEqual("This Is A Control Room");
    });
});