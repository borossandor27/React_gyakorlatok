import useAuth from "../context/useAuth.js";

const ProfilePage = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h2>Profil</h2>
            <p>Azonosító: {user.id}</p>
            <p>Név: {user.fullname}</p>
            <p>Email: {user.email}</p>
            <p>Szerepkör: {user.role}</p>
            <button onClick={logout}>Kijelentkezés</button>
        </div>
    );
};

export default ProfilePage;
