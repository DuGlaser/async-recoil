import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchState } from '../states/searchState';

const SearchInput = () => {
  const [text, setText] = useState('');
  const setSearchWord = useSetRecoilState(searchState);

  const handleSubmit = () => {
    console.log('SearchInput handleSubmit()');
    setSearchWord(text);
  };

  return (
    <div className="wrapper">
      <input type="" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>検索</button>
    </div>
  );
};

export default SearchInput;
