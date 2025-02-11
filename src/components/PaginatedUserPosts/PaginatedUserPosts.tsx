import { withPagination } from "../../utils/withPagination";
import UserPosts from "../UserPosts/UserPosts";

const PaginatedUserPosts = withPagination(UserPosts);

export default PaginatedUserPosts;
