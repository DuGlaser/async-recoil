import React, { useEffect, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<h1>loading</h1>}></Suspense>
    </RecoilRoot>
  );
}

export default App;
