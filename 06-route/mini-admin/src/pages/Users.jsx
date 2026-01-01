import { users } from "../data/users";
import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;