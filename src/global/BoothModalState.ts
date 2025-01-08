import createStore from 'react-superstore';

interface BoothModalState {
  isOpen: boolean;
  groupId: string | null;
}

const defaultModalState: BoothModalState = {
  isOpen: false,
  groupId: null,
};

export const [useBoothModalState, setBoothModalState, getBoothModalState] =
  createStore<BoothModalState>(defaultModalState);

export const openBoothModal = (groupId: string): void =>
  setBoothModalState({ isOpen: true, groupId: groupId });

export const closeBoothModal = (): void =>
  setBoothModalState({ isOpen: false, groupId: null });
