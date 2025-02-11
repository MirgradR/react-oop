import { useState } from "react";

interface Props<T> {
  data: T[];
  columns: string[];
  renderRow: (item: T) => React.ReactNode;
  sortStrategy: (a: T, b: T) => number;
  filterStrategy: (data: T[]) => T[];
}

// Основной компонент таблицы
function TableWithFilters<T>({
  data,
  columns,
  renderRow,
  sortStrategy,
  filterStrategy,
}: Props<T>) {
  const [filteredData, setFilteredData] = useState(filterStrategy(data));

  const handleSort = () => {
    setFilteredData((prevData) => [...prevData].sort(sortStrategy));
  };

  return (
    <div>
      <button onClick={handleSort}>Сортировать</button>
      <table border={1}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>{filteredData.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

export default TableWithFilters;
