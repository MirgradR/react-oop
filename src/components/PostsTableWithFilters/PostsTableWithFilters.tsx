import { Post } from "../../types/types";
import { postFilterStrategy, postSortStrategy } from "../../utils/strategies";
import TableWithFilters from "../TableWithFilters/TableWithFilters";

interface Props {
  posts: Post[];
}

function PostsTableWithFilters({ posts }: Props) {
  return (
    <TableWithFilters<Post>
      data={posts}
      columns={["Заголовок", "Текст"]}
      renderRow={(post) => (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      )}
      sortStrategy={postSortStrategy}
      filterStrategy={postFilterStrategy}
    />
  );
}

export default PostsTableWithFilters;
