import React, { useEffect } from 'react';
import { css } from 'emotion';
import { useRecoilValue } from 'recoil';
import { searchResult } from '../states/searchState';
import MovieCard from './MovieCard';

const movieCardList = css``;

const MovieList = () => {
  // https://github.com/facebookexperimental/Recoil/issues/12
  const data = useRecoilValue(searchResult);
  return (
    <ul className={movieCardList}>
      {data.Response === 'True' &&
        data.Search.map((movie) => {
          return <MovieCard movie={movie} key={movie.imdbID} />;
        })}
    </ul>
  );
};

export default MovieList;
