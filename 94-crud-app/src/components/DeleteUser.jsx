import { deleteUser, getUserById } from "../api";
const DeleteUser = () => {
    // rákérdez a felhasználótól, hogy tényleg törölni akarja-e a felhasználót
    // ha igen, akkor törli a felhasználót az adatbázisból
    // ha nem, akkor visszairányítja a felhasználót a felhasználók listájára
    let id = window.location.pathname.split('/').pop();
    const user = getUserById(id).then((response) => response.data).catch((error) => alert('Failed to fetch user: ' + error.message));
    const confirmDelete = window.confirm(`Do you really want to delete user: ${user.name}?`);
    if (confirmDelete) {
        deleteUser(id)
            .then(() => alert('User deleted successfully!'))
            .catch((error) => alert('Failed to delete user: ' + error.message));
    } else {
        window.location.href = '/';
    }
};
export default DeleteUser;