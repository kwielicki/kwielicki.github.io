(function() {
function displaySearchResults(results, store) {
var searchResults = document.getElementById('search-results');
const searchElement = document.querySelector('#search-results');
if (results.length) { // Are there any results?
  var appendString = '';
  for (var i = 0; i < results.length; i++) {  // Iterate over the results
    var item = store[results[i].ref];
    appendString += '<li title="' + item.title + '" class="search__element" data-site-href="' + item.url + '">' + 
    '<ul class="list-unstyled"><li><span>' + item.author + ', ' + item.date + '</span></li></ul>' +
    '<h3 class="search__title"><a class="search__link js-search__link" href="' + item.url + '">' + item.title + '</a></h3>';
    appendString += '<p class="search__description">' + item.content.substring(0, 200) + '...</p>' + 
    '<a href="'+ item.url + '" class="btn btn-primary">Czytaj cały artykuł</a></li>';
    
  }

  searchResults.innerHTML = appendString;
  const newDate = new Date();
  const BJtimerEnd = newDate.getTime() - BJtimerStart;
  const elBody = document.getElementsByTagName('body')[0];
  const elSearchLabel = document.querySelector('.js-search-result');
  const searchElements = document.querySelectorAll('.search__element').length;

  elBody.setAttribute('data-page-loaded', BJtimerEnd / 1000 + ' sekund');
  elSearchLabel.innerHTML = 'Wyniki: ' + searchElements + ' (w ' + BJtimerEnd / 1000 + ' s)';
  searchElement.classList.remove('search--empty');
} else {
  searchResults.innerHTML = '<li class="search__element--empty">Uuuups.' + '<br>' + 'Nie znaleziono wyników odpowiadających Twojemu zapytaniu.</li>';
  searchElement.classList.add('search--empty');
}
}

function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split('&');

for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');

  if (pair[0] === variable) {
    return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
  }
}
}

var searchTerm = getQueryVariable('zapytanie');

if (searchTerm) {
document.getElementById('search-box').setAttribute("value", searchTerm);
// Initalize lunr with the fields it will be searching on. I've given title
// a boost of 10 to indicate matches on this field are more important.
var idx = lunr(function () {
  this.field('id');
  this.field('title', { boost: 10 });
  this.field('author');
  this.field('category');
  this.field('content');

  this.metadataWhitelist = ['position'];

  for (var key in window.store) { // Add the data to lunr
      this.add({
          'id': key,
          'title': window.store[key].title,
          'author': window.store[key].author,
          'category': window.store[key].category,
          'content': window.store[key].content
      });

  }

});
var results = idx.search(searchTerm); // Get lunr to perform a search
displaySearchResults(results, window.store); // We'll write this in the next section

}
    document.querySelector('.form').addEventListener('submit', function( event ) {
      const inputEl = this.querySelector('.form-control');
      const inputElValue = inputEl.value;
      if (inputEl.value === "" || inputElValue === locationSearch) {
        event.preventDefault();
      };
    });

    //- Site search validator
    const locationSearch = document.location.search.split("&")[0].replace("?","").split("=")[1];
    const locationSearchParamName = document.location.search.split("&")[0].replace("?","").split("=")[0];
    if (locationSearchParamName !== 'zapytanie') {
        const tt = document.querySelector('.js-search-result');
        if (tt !== null) {
            tt.innerHTML = 'Wpisz frazę aby wyszukać';
        }
    }
})();
