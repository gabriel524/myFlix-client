import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: [
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddc8"),
          "Title" : "Star Wars:The Last Jedi",
          "Description" : "The Last Jedi follows Rey as she seeks the aid of Luke Skywalker, in hopes of turning the tide for the Resistance in the fight against Kylo Ren and the First Order.",
          
          "Genre" : {
            "Name" : "Science Fiction, Fantasy, Action.",
            "Description" : "Star Wars: The Last Jedi (also known as Star Wars: Episode VIII-The Last Jedi) is a 2017 American epic space opera.",
            "Actors" : [
              "Mark Hamill",
              "Daisy Ridley",
              "Adam Driver",
              "john Boyega"
            ]
          },
          "Director" : {
            "Name" : "Rian Johnson.",
            "Bio" : "Rian Craig Johnson is an American filmmaker. He made his directorial debut with the neo-noir mystery film Brick, which received positive reviews and grossed nearly $4 million on a $450,000 budget.",
            "Birthyear" : " December 17, 1973",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt2527336/mediaviewer/rm574104832/?ref_=tt_ov_i",
          "Featured" : true
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddc9"),
          "Title" : "Smallville",
          "Description" : "Smallville is based on the popular DC Comics character, Superman. The series follows the life of a teenage Clark Kent living in the town of Smallville, Kansas that is set at the start of the 21st century.",
          
          "Genre" : {
            "Name" : "Supernatural, Action, Drama, Superhero.",
            "Description" : "Smallville ; Genre. Action-adventure · Drama · Superhero ; Based on. Superman.",
            "Actors" : [
              "Tom Welling",
              "Michael Rosenbanum",
              "Kristin Kreuk",
              "John Schneider",
              "Annette O'Toole"
            ]
          },
          "Director" : {
            "Name" : "Greg Beeman",
            "Bio" : "Greg Beeman is an American film and television director and producer and winner of the Director's Guild of America award for Outstanding Directorial Achievement.",
            "Birthyear" : "1962",
            "Deathyear" : "...."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0279600/mediaviewer/rm1689082368/",
          "Featured" : true
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddca"),
          "Title" : "The Adam Project",
          "Description" : "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.",
          
          "Genre" : {
            "Name" : "Action, Drama, Comedy AveSci-fi/Adventure",
            "Description" : "Smallville ; Genre. Action-adventure · Drama.",
            "Actors" : [
              "Ryan Reynolds",
              "Walker Scobell",
              "Jennifer Garner",
              "Mark Ruffalo"
            ]
          },
          "Director" : {
            "Name" : "Christopher Nolan",
            "Bio" : "Christopher Nolan CBE is a British-American film director, producer, and screenwriter.",
            "Birthyear" : "July 30, 1970",
            "Deathyear" : "...."
          },
          "Imagepath" : "https://best-of-netflix.com/the-adam-project-playlist-a-full-list-of-all-the-songs-in-the-netflix-film/",
          "Featured" : true
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddcb"),
          "Title" : "The Matrix",
          "Description" : "Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
          
          "Genre" : {
            "Name" : "Science fiction; Fantasy, Action",
            "Description" : "The Matrix is an action movie, pure and simple- more of a Post-Apocalyptic; Science fiction; Action.",
            "Actors" : [
              "Keanu Reeves",
              "Carrie Anne",
              "Laurance Fishburne",
              "Monica Bellucci"
            ]
          },
          "Director" : {
            "Name" : "Lana Wachowski",
            "Bio" : "Lana Wachowski is an American film and television directors, writers and producers.",
            "Birthyear" : "June 21, 1965 ",
            "Deathyear" : "...."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0133093/mediaviewer/rm525547776/",
          "Featured" : true
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddcc"),
          "Title" : "Spider-Man: No Way Home.",
          "Description" : "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man",
          
          "Genre" : {
            "Name" : "Action/Adventure",
            "Description" : "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man.",
            "Actors" : [
              "Tom Holland",
              "Tobey Maguire",
              "Zendaya",
              "Andrew Garfield"
            ]
          },
          "Director" : {
            "Name" : "Jon Watts",
            "Bio" : "Jonathan Watts is an American filmmaker. His credits include directing the Marvel Cinematic Universe superhero films Spider-Man: Homecoming, Spider-Man: Far From Home, and Spider-Man: No Way Home.",
            "Birthyear" : "June 28, 1981",
            "Deathyear" : "...."
          },
          "Imagepath" : "https://www.imdb.com/title/tt10872600/mediaviewer/rm3936939521/?ref_=tt_ov_i",
          "Featured" : true
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddcd"),
          "Title" : "Game of Thrones",
          "Description" : "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
          
          "Genre" : {
            "Name" : "Faction Adventure Fantasy Serial drama Tragedy",
            "Description" : "Game of Thrones is a Action Adventure Fantasy Serial drama Tragedy.",
            "Actors" : [
              "Emilia Clarke",
              "Kit Harington",
              "Sophie Turner",
              "Maisie Williams"
            ]
          },
          "Director" : {
            "Name" : "Alan Taylor",
            "Bio" : "lan Taylor is an American television and film director. He is known for his work on TV shows such as Lost, The West Wing, Six Feet Under, Sex and the City, The Sopranos, Game of Thrones, Boardwalk Empire, Deadwood, and Mad Men.",
            "Birthyear" : "January 13, 1959",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0944947/mediaviewer/rm4204167425/",
          "Featured" : true,
          "Actors" : [
            "John Bradley"
          ]
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddce"),
          "Title" : "The Lord of the Rings: The Return of the King",
          "Description" : "The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
          
          "Genre" : {
            "Name" : "Fantasy",
            "Description" : "The Lord of the Rings: The Return of the King is a 2003 epic fantasy adventure film directed by Peter Jackson, based on the third volume of J. R. R. ..",
            "Actors" : [
              "Elijah Wood",
              "Viggo Mortensen",
              "Ian McKellen"
            ]
          },
          "Director" : {
            "Name" : "Sir Peter Jackson",
            "Bio" : "Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer.",
            "Birthyear" : "October 31, 1961",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0167260/mediaviewer/rm584928512/?ref_=tt_ov_i",
          "Featured" : true,
          "Directord" : {
            "Bio" : "Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer."
          }
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddcf"),
          "Title" : "Eternals",
          "Description" : "The Eternals are a race of near-immortal synthetic beings created by the Celestials.",
          
          "Genre" : {
            "Name" : "Fantasy",
            "Description" : "The saga of the Eternals is a Action Adventure Fantasy film.",
            "Actors" : [
              "Angelina Jolie",
              "Harry Styles",
              "Kit Harington",
              "Richard Madden",
              "Gemma Chan"
            ]
          },
          "Director" : {
            "Name" : "Chloe Zhao",
            "Bio" : "Chloé Zhao, born Zhao Ting, is a Chinese filmmaker, known primarily for her work on independent films.",
            "Birthyear" : "March 31, 1982",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt9032400/mediaviewer/rm1516895489/?ref_=tt_ov_i",
          "Featured" : true
        },

        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddd0"),
          "Title" : "Man of Steel",
          "Description" : "With the imminent destruction of Krypton, their home planet, Jor-El (Russell Crowe) and his wife seek to preserve their race by sending their infant son to Earth. The child's spacecraft lands at the farm of Jonathan (Kevin Costner) and Martha (Diane Lane) Kent, who name him Clark and raise him as their own son.",
          
          "Genre" : {
            "Name" : "Fantasy/Superhero",
            "Description" : "Man of Steel is a science fiction/fantasy adventure than a superhero movie.",
            "Actors" : [
              "Henry Cavill",
              "Amy Adams",
              "Michael Shannon",
              "Kevin Costner",
              "Diane Lane"
            ]
          },
          "Director" : {
            "Name" : "Zack Snyder",
            "Bio" : "Zachary Edward Snyder is an American film director, producer, screenwriter, and cinematographer.",
            "Birthyear" : "March 1, 1966",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0770828/mediaviewer/rm2035131904/?ref_=tt_ov_i",
          "Featured" : true,
          "Descritption" : "Update movie description stating Clark learns about the source of his abilities and his real home when he enters a Kryptonian ship in the Artic. However, an old enemy follows him to Earth in search of a codex and brings destruction."
        },
        {
          "_id" : ObjectId("6290cad69cc37ae6f751ddd1"),
          "Title" : "The Lord of the Rings: The Fellowship of the Ring",
          "Description" : "Synopsis. Sauron, the Dark Lord, has awakened and threatens to conquer Middle-earth. To stop this ancient evil once and for all, Frodo Baggins must destroy the One Ring in the fires of Mount Doom.Men, Hobbits, a wizard, an Elf, and a Dwarf form a fellowship to help him on his quest.",
          
          "Genre" : {
            "Name" : "Fantasy",
            "Description" : "The Fellowship of the Ring is a 2001 epic fantasy adventure film.",
            "Actors" : [
              "Elijah Wood",
              "Orlando Bloom",
              "Ian McKellen."
            ]
          },
          "Director" : {
            "Name" : "Sir Peter Jackson",
            "Bio" : "Update of director bio stating Knighted for his significant contribution to the Kiwi film industry in 2010, Jackson has been pivotal in shining a spotlight on New Zealand's spectacular filming locations.He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.",
            "Birthyear" : "October 31, 1961",
            "Deathyear" : "....."
          },
          "Imagepath" : "https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/?ref_=tt_ov_i",
          "Featured" : true
        }
      ],
      selectedMovie: null
    }
  };

  render() {
    const { movies, selectedMovie } = this.state;
  
    if (selectedMovie) return <MovieView movie={selectedMovie} />;
  
    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
  
    return (
      <div className="main-view">
       <MovieCard key={movie._id} onMovieClick={(newSelectedMovie) => { this.state.selectedMovie = newSelectedMovie; }} />
      </div>
    );
  }
}
