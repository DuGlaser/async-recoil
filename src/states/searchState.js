import { atom, selector } from 'recoil';
import { MovieApi } from '../api/movieApi';

const movieApi = new MovieApi();

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const searchResult = selector({
  key: 'searchResult',
  get: async ({ get }) => {
    const data = await movieApi.index(get(searchState));
    return data;
  },
});
