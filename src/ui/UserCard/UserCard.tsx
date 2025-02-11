import { ReactNode } from "react";
import { User } from "../../types/types";
import Card from "../Card/Card";

interface Props {
  user: User;
  postsSlot: ReactNode;
}

// Карточка пользователя
function UserCard({ user, postsSlot }: Props) {
  return <Card title={user.name}>{postsSlot}</Card>;
}

export default UserCard;
