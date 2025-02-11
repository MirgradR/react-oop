import { User } from "../../types/types";
import { useFetch } from "../../utils/useFetch";
import UsersTableWithFilters from "../UsersTableWithFilters/UsersTableWithFilters";

// Компонент для отображения пользователей
function Users() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <div>Загрузка пользователей...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Пользователи</h1>
      <UsersTableWithFilters users={data || []} />
    </div>
  );
}

export default Users;
