var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    genre: 'Fantasy, Przygodowy',
    //posters.src: 'wizard.jpg';
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Animacja',
    //posters.src: 'lion.jpg';
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

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },
    
  render: function() {
    return (
      React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {}, movie.posters),
      );
    )
  },
});

var moviesElements = React.createElement(Movie, {key: movie_id, movie.title, movie.desc, movie.genre, movie.posters},);

ReactDOM.render(element, document.getElementById('app'));