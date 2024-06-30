import { create } from 'zustand';

type State = {
  // ...
};

type Action = {
  setState: (newState: State | ((prevState: State) => State)) => void;
};

type Store = State & Action;

export const useAuth = create<Store>((set) => ({
  // ...
  setState: (newState: State | ((prevState: State) => State)) => set(newState),
}));
