import { Post, User } from "../types/types";

// Стратегии сортировки и фильтрации
export const userSortStrategy = (a: User, b: User) =>
  a.name.localeCompare(b.name);
export const userFilterStrategy = (data: User[]) =>
  data.filter((user) => user.name.includes("Leanne"));
export const postSortStrategy = (a: Post, b: Post) =>
  a.title.localeCompare(b.title);
export const postFilterStrategy = (data: Post[]) =>
  data.filter((post) => post.body.includes("autem"));
