describe("nsTextAndSub", function () {
    var $rootScope,
        $scope,
        $compile,
        $el,
        el,
        $body = $('body'),
        simpleHtml = '<ns-text-and-sub text="{{scopeText}}" sub="{{scopeSub}}"></ns-text-and-sub>';

    beforeEach(function () {
        module('directives', 'templates');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element(simpleHtml))($scope);
        });
        $body.append(el);
        $rootScope.$digest();

        //Grabs form the body, confirms it was compiled out
        $el = $('.text-and-sub');
    });

    afterEach(function () {
        $body.empty();
    });

    it("Should render the directive out in the dom", function () {
        expect($el.length).toEqual(1);
    });
    it("Should render out the text when given in scope", function () {
        $scope.scopeText = "Jungle Land";
        $scope.$digest();
        expect($el.find('h3').text()).toEqual("Jungle Land");
    });
    it("Should render out the sub when given in scope", function () {
        $scope.scopeSub = "Land Mark"
        $scope.$digest();
        expect($el.find('h5').text()).toEqual("Land Mark");
    });
    it("Should hide the sub text when it is not define", function () {
        expect($el.find('h5').is(":visible")).toBeFalsy();
    });
    it("Should show the sub text when it is define", function () {
        $scope.scopeSub = "Land Mark"
        $scope.$digest();
        expect($el.find('h5').is(":visible")).toBeTruthy();
    });
});