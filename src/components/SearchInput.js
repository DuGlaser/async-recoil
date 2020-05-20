import React, { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { searchState } from '../states/searchState';
import { css } from 'emotion';
import { Icon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';

const wrapper = css`
  width: 500px;
  height: 40px;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 12px rgba(33, 29, 27, 0.12),
    0px 0px 1px rgba(33, 29, 27, 0.1);

  input {
    flex: 4;
    height: 100%;
    font-size: 14px;
    padding: 10px 5px;
    border: none;
    margin: 0;
    outline: none;
  }

  button {
    height: 100%;
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    outline: none;
    box-shadow: 0px 4px 12px rgba(33, 29, 27, 0.12),
      0px 0px 1px rgba(33, 29, 27, 0.1);
  }
`;

const SearchInput = () => {
  const [text, setText] = useState('');
  const setSearchWord = useSetRecoilState(searchState);

  const handleSubmit = () => {
    console.log('SearchInput handleSubmit()');
    setSearchWord(text);
  };

  return (
    <div className={wrapper}>
      <input type="" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>
        <Icon icon={searchOutlined} style={{ fontSize: '20px' }} />
      </button>
    </div>
  );
};

export default SearchInput;
