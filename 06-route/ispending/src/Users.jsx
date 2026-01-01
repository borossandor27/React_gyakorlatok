import { useLoaderData } from "react-router-dom";

export async function usersLoader() {
  // Szimulálunk egy lassú API hívást
  await new Promise((res) => setTimeout(res, 2000));

  return [
    { id: 1, name: "Anna" },
    { id: 2, name: "Bence" },
    { id: 3, name: "Csilla" },
  ];
}

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