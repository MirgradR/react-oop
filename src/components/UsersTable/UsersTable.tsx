import { User } from "../../types/types";
import Table from "../Table/Table";

interface Props {
  users: User[];
}

function UsersTable({ users }: Props) {
  return (
    <Table<User>
      data={users}
      columns={["Имя", "Email"]}
      renderRow={(user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )}
    />
  );
}

export default UsersTable;
