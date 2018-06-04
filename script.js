var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    genre: 'Fantasy, Przygodowy',
    posters: 'wizard.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Animacja',
    posters: 'lion.jpg'
  }
];  

/*var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {}, movie.posters),
    );
});*/

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
    
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {data: this.props.movie.title}),
        React.createElement(MovieDescription, 
          {
            desc: this.props.movie.desc,
            genre: this.props.movie.genre,
            source: this.props.movie.posters
          }
        )
      )
    );
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    data: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.createElement('h2', {}, this.props.data);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
    genre: React.PropTypes.string.isRequired,
    source: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, this.props.desc),
      React.createElement('p', {}, this.props.genre),
      React.createElement('img', {src: this.props.source})
    );
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

// do zrobienia
// komponent MoviesList
// on przyjmuje w propsie tablicę wszystkich filmów
// w funkcji render() kod z 74. - 76. ze zmianą `movies` na podanego propsa
// na końcu w return zwróć proszę `ul` i jako jego dziecko moviesElements

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    // tutaj będzie do wywołania nowy komponent MoviesList
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
