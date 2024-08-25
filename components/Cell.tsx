import { useState, useEffect } from 'react';
import useGridStore from '../store/gridStore';

interface CellProps {
  id: string;
}

const Cell: React.FC<CellProps> = ({ id }) => {
  const [editing, setEditing] = useState(false);
  const { cells, setCellContent } = useGridStore();
  const cell = cells[id] || { content: '', align: 'left', fontSize: '14px' };

  return (
    <div
      className="border p-2"
      style={{ textAlign: cell.align, fontSize: cell.fontSize }}
      onDoubleClick={() => setEditing(true)}
      onBlur={() => setEditing(false)}
    >
      {editing ? (
        <input
          value={cell.content}
          onChange={(e) => setCellContent(id, e.target.value)}
          className="w-full"
        />
      ) : (
        cell.content
      )}
    </div>
  );
};

export default Cell;
