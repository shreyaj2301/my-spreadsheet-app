import { useState } from 'react';
import useGridStore from '../store/gridStore';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const { cells } = useGridStore();

  const filteredCells = Object.keys(cells).filter((key) =>
    cells[key].content.includes(query)
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border p-2"
      />
      {/* Render filteredCells */}
    </div>
  );
};



export default SearchBar;
