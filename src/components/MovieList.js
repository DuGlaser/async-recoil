import React, { useEffect } from 'react';
import { css } from 'emotion';
import { useRecoilValue } from 'recoil';
import { searchResult } from '../states/searchState';
import MovieCard from './MovieCard';

const movieCardList = css`
  display: grid;
  width: 100%;
  margin-top: 30px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-content: center;
`;

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
