
describe('AuthenticationService', function () {
    var svc, $q, $rootScope;

    beforeEach(function () {
        module('mock.firebase', 'RealTimeTrade');
    });

    beforeEach(inject(function (_AuthenticationService_, _$q_, _$rootScope_) {
        svc = _AuthenticationService_;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe('onAuth', function () {
        it('calls the onAuth function on a change of authentication', function () {
            expect(svc.auth.data).toBeNull();
            svc.ref.changeAuthState({});