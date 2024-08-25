import Cell from './Cell';

const Grid: React.FC = () => {
  const rows = 50;
  const cols = 20;

  const cells = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push(<Cell id={`cell-${i}-${j}`} key={`cell-${i}-${j}`} />);
    }
  }

  return (
    <div className="grid grid-cols-20 gap-1">
      {cells}
    </div>
  );
};

export default Grid;
