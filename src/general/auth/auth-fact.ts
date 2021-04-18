
angular.module('RealTimeTrade').factory('AuthenticationService', function (ToastService, $firebaseAuth, $firebaseObject) {
  var svc = this;

  svc.ref = new Firebase('https://realtimetrade.firebaseio.com');
  svc.auth = $firebaseAuth(svc.ref);

  //Get signed in user ID (or null if not signed in)
  svc.getUserID = function () {
    return svc.auth.$getAuth().uid;
  };
	
  //Watch for changes in the authentication state
  svc.ref.onAuth(function (authData) {
    svc.auth.data = authData;
  });

  //Log in
  svc.logIn = function (email: string, password: string) {
    svc.auth.isLoading = true;
    return svc.auth.$authWithPassword({
      email: email,
      password: password
    })
      .then(function (response) {
        svc.profileImage = response.password.profileImageURL;
        return svc.profileImage;
      })

      .catch(function (error: string) {
        console.log(error);
        ToastService.toast(error, 'color: red;');
        return error;
      })

      .finally(function () {
        svc.auth.isLoading = false;
      });
  };

  //Sign up
  svc.signUp = function (email: string, password: string) {
    return svc.auth.$createUser({
      email: email,
      password: password
    })
      .then(function (response: {uid: string}) {
        var user = svc.ref.child('users').child(response.uid);
        var newUser = $firebaseObject(user);
        newUser.uid = response.uid;
        newUser.name = response.uid;
        newUser.$save();
        return svc.logIn(email, password);
      })

      .catch(function (error: string) {
        console.log(error);
        ToastService.toast(error, 'color: red;');
        return error;
      });
  };
	
  //Log out
  svc.logOut = function () {
    svc.auth.$unauth();
  };

  return svc;
});