// Базовый компонент таблицы
type TableProps<T> = {
  data: T[];
  columns: string[];
  renderRow: (item: T) => React.ReactNode;
};

function Table<T>({ data, columns, renderRow }: TableProps<T>) {
  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
}

export default Table;
