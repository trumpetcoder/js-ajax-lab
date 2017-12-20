// Setting up a variable of books globally = to the ul with an id('#books')
getBooks();

// Grabbing the info from "https://den-super-crud.herokuapp.com/books"

function getBooks() {

$.ajax("https://den-super-crud.herokuapp.com/books").done(function(data) {
   
   // Checking the data through console.log
   console.log(data);
   
   // Setting a usable variable = to myBooks using the data from books
   var myBooks = data.books;
   
   // Checking the Console to see return is what we expected
   console.log(myBooks[0].title);
   
   // Setting up a for loop to grab each piece of data we want and appending that data to an <li>
   for(var i = 0; i < myBooks.length; i++){
   	
   	// appending each individual <li> with the proper information
       $(books).append('<li>' + myBooks[i].title + '</li>');
       $(books).append('<li>' + myBooks[i].author + '</li>');
       $(books).append('<li>' + myBooks[i].releaseDate + '</li>');
       $(books).append('<li>' + '<img src=' + myBooks[i].image + '>' + '</li>');
       
   }

});


$('#new-book').on('submit', function (event) {

  event.preventDefault();
  
  var title = $('input#book-title').val();

  var author = $('input#book-author').val();

  var image = $('input#book-image').val();

  var release = $('input#book-release-date').val();

  $.ajax ({
  type: 'POST',
  url: "https://den-super-crud.herokuapp.com/books",
  dataType: 'JSON',
  data: {'title': title, 'author': author, 'image': image, 'release': release},
  
  });
  getBooks();
  $('input#book-title').val('');
  $('input#book-author').val('');
  $('input#book-image').val('');
  $('input#book-release-date').val('');
});
}


// Code Workouts and ideas!
// $(function () {
      
//       let $books = $('#books');


//      $.ajax ({
//          type: 'GET',
//          url: 'https://den-super-crud.herokuapp.com/books/',
//          success: function(books) {
//               $.each(books, function(i, book) {
//                    $books.append('<li>my book</li>');
//            $books.append('<li>' + book[i].title + '</li>');
//            $books.append('<li>' + book[i].author + '</li>');
//            $books.append('<li>' + book[i].releaseDate + '</li>');
//            $books.append('<li>' + '<img src=' + book[i].image + '>' + '</li>');
//            });
//           }

//      });

// });

// $(function () {

//  var $books = $('#books');

//  var $title = $('#book-title');

//  var $author = $('#book-author');

//  var $image = $('#book-image');

//  var $release = $('#book-release-date');

//  $.ajax ({
//          type: 'GET',
//          url: "https://den-super-crud.herokuapp.com/books/",
//          success: function(books) {
//               $.each(books, function(i, book) {
//                    // $books.append('<li>my book</li>');
//            $books.append('<li>' + book[i].title + '</li>');
//            $books.append('<li>' + book[i].author + '</li>');
//            $books.append('<li>' + book[i].releaseDate + '</li>');
//            $books.append('<li>' + '<img src=' + book[i].image + '>' + '</li>');
//            });
//           }

//      });

// });


		





	
	
















































// End
