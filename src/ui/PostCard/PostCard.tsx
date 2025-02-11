import { Post } from "../../types/types";
import Card from "../Card/Card";

interface Props {
  post: Post;
}
// Карточка поста
function PostCard({ post }: Props) {
  return (
    <Card title={post.title}>
      <p>{post.body}</p>
    </Card>
  );
}

export default PostCard;
