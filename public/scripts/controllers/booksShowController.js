angular
  .module('bookApp')
  .controller('booksShowController', booksShowController);
 

booksShowController.$inject=['$http', '$routeParams', '$location'];
function booksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+bookId

  }).then(onbooksShowSuccess, onError);


  function onbooksShowSuccess(response){
    console.log('here\'s the data for book', bookId, ':', response.data);
    vm.books = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }

   vm.editbooks = function(book) {
    console.log('updating book: ', book);
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + books._id,
      data: {
        name : book.name,
        author : book.author,
        image : book.image,
        releaseDate : Number
      }
    }).then(onbooksUpdateSuccess, onError);

    function onpokemonUpdateSuccess(response){
      console.log('here\'s the UPDATED data for pokemon', pokemonId, ':', response.data);
      vm.books = response.data;
      $location.path('/');
    }
  };

  vm.deletebooks = function (book) {
    console.log('are you sure you want to delete');
    $http ({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/'+book._id,
    }).then(onbooksDeleteSuccess, onError);

    function onbooksDeleteSuccess(res) {
      console.log('books delete resposne data:', response.data);
      $location.path('/');
    }
  };
}
 