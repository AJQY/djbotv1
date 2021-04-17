
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
            svc.ref.flush();
            expect(svc.auth.data).not.toBeNull();
        });
    });

    describe('getUserID', function () {
        it('has a getUserID function', function () {
            expect(_.isFunction(svc.getUserID)).toBeTruthy();
        });

        it('calls the getAuth function', function () {
            spyOn(svc.auth, '$getAuth').and.returnValue({ uid: '' });
            svc.getUserID();
            expect(svc.auth.$getAuth).toHaveBeenCalled();
        });
    });

    describe('logIn', function () {
        it('has a logIn function', function () {
            expect(_.isFunction(svc.logIn)).toBeTruthy();
        });

        it('calls the authWithPassword function', function () {
            spyOn(svc.auth, '$authWithPassword').and.returnValue($q.when());
            svc.logIn();
            expect(svc.auth.isLoading).toBeTruthy();
            expect(svc.auth.$authWithPassword).toHaveBeenCalled();
        });

        it('sets the profile image on success', function () {
            spyOn(svc.auth, '$authWithPassword').and.returnValue($q.when({
                password: {
                    profileImageURL: 'EXAMPLE_URI'
                }
            }));
            svc.logIn().then(function (response) {
                expect(response).toEqual('EXAMPLE_URI');
            });
            $rootScope.$apply();
            expect(svc.profileImage).toEqual('EXAMPLE_URI');
        });

        it('returns an error on failure', function () {
            spyOn(svc.auth, '$authWithPassword').and.returnValue($q.reject('FAILED'));
            svc.logIn().then(function (response) {
                expect(response).toEqual('FAILED');
            });
            $rootScope.$apply();
        });

        it('sets isLoading according to status', function () {
            spyOn(svc.auth, '$authWithPassword').and.returnValue($q.reject());
            svc.logIn();
            expect(svc.auth.isLoading).toBeTruthy();
            $rootScope.$apply();
            expect(svc.auth.isLoading).toBeFalsy();
        });
    });

    describe('signUp', function () {
        it('has a signUp function', function () {
            expect(_.isFunction(svc.signUp)).toBeTruthy();
        });

        it('calls the createUser function', function () {
            spyOn(svc.auth, '$createUser').and.returnValue($q.when());
            svc.signUp();
            expect(svc.auth.$createUser).toHaveBeenCalled();
        });

        it('calls into the logIn function on success', function () {
            spyOn(svc.auth, '$createUser').and.returnValue($q.when({
                uid: '0'
            }));
            spyOn(svc, 'logIn').and.returnValue('EXAMPLE_RETURN');
            svc.signUp().then(function (response) {
                expect(response).toEqual('EXAMPLE_RETURN');
                expect(svc.logIn).toHaveBeenCalled();
            });
            $rootScope.$apply();
        });
        