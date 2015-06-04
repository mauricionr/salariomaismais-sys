'use strict';

describe('Controller: VagasCtrl', function () {

  // load the controller's module
  beforeEach(module('salariomaismaisApp'));

  var VagasCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VagasCtrl = $controller('VagasCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
