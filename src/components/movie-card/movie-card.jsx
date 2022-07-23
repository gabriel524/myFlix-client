import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';


export class MovieCard extends React.Component {
  
//Basic display of movies that are rendered on MainView
render() {
  const { movie, onMovieClick } = this.props;
  
  return (
    <Container fluid className="movieCardContainer">
      <Row className="justify-content-md-center">
      <Col md={8}>
          <CardGroup className='card'>
            <Card className="movieCard mt-3 mb-3">
              <Card.Img variant="top" src={movie.ImagePath} />
              <Card.Body>
                <div className='title'>
                <Card.Title>{movie.Title}</Card.Title>
                </div>
                <Card.Text>{movie.Description}</Card.Text>
                <div>
                <Button onClick={() => onMovieClick(movie)} variant="link" >
                <a href="#" id='button' class="btn btn-info" role="button">Next</a>
                </Button>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Imagepath: PropTypes.string.isRequired
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};
