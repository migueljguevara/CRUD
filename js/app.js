var aplicacion = angular.module('app', []);
aplicacion.controller('Clientes', function($scope) {
   $scope._id = null;
   $scope.nombre = '';
   $scope.apellido = ''
   $scope.domicilio = '';
   $scope.telefono = '';
   $scope.email = '';
   $scope.clientes = [];
   $scope.eliminar = '';
   $scope.guardarCliente = function() {
      if ($scope._id == null) {
         $scope.clientes.push({
            nombre: $scope.nombre,
            apellido: $scope.apellido,
            domicilio: $scope.domicilio,
            telefono: $scope.telefono,
            email: $scope.email
         }); 
      } else {
         $scope.clientes[$scope._id] = {
            nombre: $scope.nombre,
            apellido: $scope.apellido,
            domicilio: $scope.domicilio,
            telefono: $scope.telefono,
            email: $scope.email
         };
      }
      $scope.limpiarDatos();
   }
   $scope.marca = function (index) {
      $scope.eliminar = index;
   }
   $scope.recuperarCliente = function(index) {
      $scope._id = index;
      $scope.nombre = $scope.clientes[index].nombre;
      $scope.apellido = $scope.clientes[index].apellido;
      $scope.domicilio = $scope.clientes[index].domicilio;
      $scope.telefono = $scope.clientes[index].telefono;
      $scope.email = $scope.clientes[index].email;
   };
   $scope.eliminarCliente = function() {
      var clientes_actualizado = [];
      for (var i = 0; i < $scope.clientes.length; i++) {
         if (i != $scope.eliminar) {
            clientes_actualizado.push($scope.clientes[i]);
         }
      }
      $scope.clientes = clientes_actualizado;
   };
   $scope.limpiarDatos = function() {
      $scope._id = null;
      $scope.nombre = '';
      $scope.apellido = '';
      $scope.domicilio = '';
      $scope.telefono = '';
      $scope.email = '';
   };
});