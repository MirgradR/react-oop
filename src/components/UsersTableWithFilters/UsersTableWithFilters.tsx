import { User } from "../../types/types";
import { userSortStrategy, userFilterStrategy } from "../../utils/strategies";
import TableWithFilters from "../TableWithFilters/TableWithFilters";

interface Props {
  users: User[];
}

function UsersTableWithFilters({ users }: Props) {
  return (
    <TableWithFilters<User>
      data={users}
      columns={["Имя", "Email"]}
      renderRow={(user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )}
      sortStrategy={userSortStrategy}
      filterStrategy={userFilterStrategy}
    />
  );
}

export default UsersTableWithFilters;
