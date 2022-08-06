import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './movie-card.scss';

export class MovieCard extends React.Component {
  
//Basic display of movies that are rendered on MainView
render() {
  const { movie} = this.props;


  return (
  <Container fluid className="movieCardContainer">
    <Row className="justify-content-md-center">
      <Col>
        <CardGroup>
          <Card className="movieCard mt-12 mb-12  ">
            <Card.Img variant="top" crossOrigin="anonymous" src={movie.Imagepath}
            className="poster position-relative" /> {' '}
            <Card.Body>
                <Card.Title className="card-title mb-2">{movie.Title}</Card.Title>
              <Link to={`/movies/${movie._id}`}>
                  <Button className="btn btn-info" role="button" 
                  variant="error">Open</Button>
            </Link>
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
  })
};

