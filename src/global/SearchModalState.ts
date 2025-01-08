import createStore from 'react-superstore';

interface SearchModalState {
  isOpen: boolean;
}

const defaultModalState: SearchModalState = {
  isOpen: false,
};

export const [useSearchModalState, setSearchModalState, getSearchModalState] =
  createStore<SearchModalState>(defaultModalState);

export const openSearchModal = (): void =>
  setSearchModalState({ isOpen: true });

export const closeSearchModal = (): void =>
  setSearchModalState({ isOpen: false });
