import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();

  return (
    <div>
      <h2>Felhasználók</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;