
angular.module('mock.firebase', [])
    .run(function () {
        MockFirebase.override();

        MockFirebase.prototype.orderByChild = function () {
            return this;
        };

        MockFirebase.prototype.limitToLast = function () {
            return this;
        };
    });