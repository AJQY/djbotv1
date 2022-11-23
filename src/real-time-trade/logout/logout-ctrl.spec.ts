
describe('LogoutCtrl', function () {
  var ctrl, scope, AuthenticationService;

  beforeEach(function () {
    module('RealTimeTrade');
  });

  beforeEach(inject(function ($controller, $rootScope, _AuthenticationService_) {
    scope = $rootScope.$new();
    ctrl = $controller('LogoutCtrl', {
      $scope: scope
    });
    AuthenticationService = _AuthenticationService_;
  }));

  describe('logOut', function () {
    it('has a logOut function', function () {
      expect(_.isFunction(ctrl.logOut)).toBeTruthy();
      expect(ctrl.logOut).toBe(AuthenticationService.logOut);
    });
  });
});