const UserProfile = () => {
    const { user, logout } = useAuth();
    return (    
        <div>
            <h1>Üdvözöllek, {user.userName}!</h1>
            <p>Felhasználói azonosító: {user.userId}</p>
            <p>Szerepkör: {user.role}</p>
            <p>Email: {user.userEmail}</p>
            <button onClick={logout}>Kijelentkezés</button>
            <p>Ez a felhasználói profil oldal, amely csak bejelentkezett felhasználók számára érhető el.</p>
        </div>
    );
}   

export default UserProfile;