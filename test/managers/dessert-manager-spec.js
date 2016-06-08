describe("DessertManager", function () {
    var values, factory;

    beforeEach(function () {
        module('desserts');

        inject(function ($injector) {
            values = $injector.get('DessertValues');
            factory = $injector.get('DessertManager');
        });
    });

    describe("DessertValues", function () {
        it("Should instantiate with 3 pie flavors", function () {
            expect(values.pies).toEqual([
                {flavor: "cherry", score:6},
                {flavor: "apple", score:7.5},
                {flavor: "peach", score:4}
            ]);
        }); 
    });
    describe("DessertManager", function () {
        describe("pieFlavors", function () {
            it("Should return the 3 pie flavor strings", function () {
                var flavors = factory.pieFlavors();
                expect(flavors.length).toEqual(3);
            });
            it("Should throw an error if there are no pies", function () {
                values.pies = null;
                expect(function () {
                    factory.pieFlavors();
                }).toThrow();

                values.pies = [
                    {flavor: "cherry", score:6},
                    {flavor: "apple", score:7.5},
                    {flavor: "peach", score:4}
                ]

            });
        });
    });
});