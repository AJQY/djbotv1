
describe('Mock Firebase', function () {
    var exampleDB;

    beforeEach(module('mock.firebase'));

    beforeEach(function () {
        exampleDB = new Firebase('a');
    });

    describe('orderByChild', function () {
        it('should point back to the original object', function () {
            expect(exampleDB.orderByChild('0')).toEqual(exampleDB);
        });
    });

    describe('limitToLast', function () {
        it('should point back to the original object', function () {
            expect(exampleDB.limitToLast(3)).toEqual(exampleDB);
        });
    });
});