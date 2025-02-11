import { User } from "../../types/types";
import DataFetcher from "../DataFetcher/DataFetcher";
import UserPostsWithFetcher from "../UserPostsWithFetcher/UserPostsWithFetcher";

// Компонент для отображения пользователей и их постов
function UsersWithPosts() {
  return (
    <div>
      <h1>Пользователи</h1>
      <DataFetcher<User[]>
        url="https://jsonplaceholder.typicode.com/users"
        render={(data) => {
          return (
            <ul>
              {data?.map((user) => (
                <li key={user.id}>
                  {user.name}
                  <UserPostsWithFetcher userId={user.id} />
                </li>
              ))}
            </ul>
          );
        }}
      />
    </div>
  );
}

export default UsersWithPosts;
