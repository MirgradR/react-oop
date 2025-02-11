import { ComponentType, useState } from "react";

// HOC для добавления пагинации
export function withPagination<P>(WrappedComponent: ComponentType<P>) {
  return (props: P) => {
    const [page, setPage] = useState(1);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

    return (
      <div>
        <WrappedComponent {...props} page={page} />
        <div>
          <button onClick={prevPage}>Предыдущая</button>
          <button onClick={nextPage}>Следующая</button>
        </div>
      </div>
    );
  };
}
