import { JSX } from "react";
import { useFetch } from "../../utils/useFetch";

interface Props<T> {
  url: string;
  render: (data: T | null) => JSX.Element;
}

// Компонент с рендер-пропсом для получения данных и кастомного рендера
function DataFetcher<T>({ url, render }: Props<T>) {
  const { data, loading, error } = useFetch<T>(url);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return render(data);
}

export default DataFetcher;
