import create from 'zustand';

const useStore = create((set) => ({
  clickCount: 0,
  increment: () => set((state) => ({ clickCount: state.clickCount + 1 })),
}));

export default useStore;
