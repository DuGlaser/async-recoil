import React, { useEffect, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import SearchInput from './components/SearchInput';
import MovieList from './components/MovieList';
import { css } from 'emotion';
import Spinner from './components/Spinner';

const wrapper = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

function App() {
  return (
    <RecoilRoot>
      <div className={wrapper}>
        <SearchInput />
        <Suspense fallback={<Spinner />}>
          <MovieList />
        </Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
