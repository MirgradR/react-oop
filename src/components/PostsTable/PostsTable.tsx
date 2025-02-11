import { Post } from "../../types/types";
import Table from "../Table/Table";

interface Props {
  posts: Post[];
}

function PostsTable({ posts }: Props) {
  return (
    <Table<Post>
      data={posts}
      columns={["Заголовок", "Текст"]}
      renderRow={(post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      )}
    />
  );
}

export default PostsTable;
