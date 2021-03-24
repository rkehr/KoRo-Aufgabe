import create from 'zustand';
// import produce from 'immer';

//const immer = config => (set, get) => config(fn => set(produce(fn), get));

const useGlobalStore = create((set) => ({
  stateItem: 0,
  setState: (newStateItem) =>
    set((state) => {
        return {stateItem: newState};
    }),
  }));
export default useGlobalStore;
