import create from 'zustand';

interface CellData {
  id: string;
  content: string;
  align: 'left' | 'center' | 'right';
  fontSize: string;
}

interface GridState {
  cells: Record<string, CellData>;
  setCellContent: (id: string, content: string) => void;
  setCellAlignment: (id: string, align: 'left' | 'center' | 'right') => void;
  setCellFontSize: (id: string, fontSize: string) => void;
}

const useGridStore = create<GridState>((set) => ({
  cells: {},
  setCellContent: (id, content) => set((state) => ({
    cells: { ...state.cells, [id]: { ...state.cells[id], content } },
  })),
  setCellAlignment: (id, align) => set((state) => ({
    cells: { ...state.cells, [id]: { ...state.cells[id], align } },
  })),
  setCellFontSize: (id, fontSize) => set((state) => ({
    cells: { ...state.cells, [id]: { ...state.cells[id], fontSize } },
  })),
}));

export default useGridStore;
