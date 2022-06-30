import React from 'react';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
}

componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
}
  
  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img crossOrigin="anonymous" src={movie.Imagepath} />
        
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className='movie-description'>
          <span className='label'>Description:</span>
          <span className='value'>{movie.Description}</span>
        </div>
        <div className='movie-director'>
          <span className='label'>Director:</span>
          <span className='value'>{movie.Director.Name + '~ ' + movie.Director.Bio}</span>
        </div>
        <div className="director-bio">
          <span className="director">Bio: </span>
          <span className="value">{movie.Director.Bio}</span>
          </div>
        <div className="director-birthyear">
          <span className="director">BirthYear: </span>
          <span className="value">{movie.Director.BirthYear}</span>
        </div>
        <div className='movie-genre'>
          <span className='label'>Genre:</span>
          <span className='value'>{movie.Genre.Name + ' ' + movie.Genre.Description}</span>
        </div>
        <div className="movie-actors">
          <span className="actors">Actors: </span>
          <span className="value">{movie.Actors}</span>
        </div>
        <div className="movie-button-div">
        <button onClick={() => { onBackClick(null); }}>Back</button>
        </div>
      </div>
    );
  }
}
