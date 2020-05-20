import React from 'react';

const MovieCard = (props) => {
  const { Poster, Title, Year, Type } = props.movie;
  return (
    <li>
      <img src={Poster} alt="" />
      <span>{Title}</span>
      <time dateTime={Year}>{Year}</time>
      <span>{Type}</span>
    </li>
  );
};

export default MovieCard;
