import { useParams } from "react-router-dom";
import { users } from "../data/users";

function UserDetails() {
  const { id } = useParams();
  const user = users.find(u => u.id === Number(id));

  if (!user) return <p>Nincs ilyen felhasználó</p>;

  return (
    <>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
    </>
  );
}

export default UserDetails;