import { Post } from "../../types/types";
import PostCard from "../../ui/PostCard/PostCard";
import { useFetch } from "../../utils/useFetch";

interface Props {
  userId: number;
}

// Компонент для отображения постов пользователя
function UserPosts({ userId }: Props) {
  const { data, loading, error } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (loading) return <div>Загрузка постов...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Посты пользователя {userId}</h2>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
