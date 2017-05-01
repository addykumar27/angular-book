angular
  .module('bookApp')
  .controller('booksIndexController', booksIndexController);


booksIndexController.$inject=['$http'];
function booksIndexController($http) {
  var vm = this;
  console.log('show book');
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'
  }).then(onbooksIndexSuccess, onError)

  function onbooksIndexSuccess(response){
    console.log('heres the get all books response data', response.data);
    vm.books = response.data.books;
  }
  function onError(error){
    console.log('theres an error: ', error);
  }
};
