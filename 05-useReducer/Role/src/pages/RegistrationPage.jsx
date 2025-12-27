const RegistrationPage = () => {
    return (
        <>
            <h1>Regisztráció</h1>
            <p>Kérjük, töltse ki az alábbi űrlapot a regisztrációhoz.</p>
            <form action="/register">
                <label htmlFor="username">Felhasználónév:</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="email">Email cím:</label>
                <input type="email" id="email" name="email" required />
                <br />  
                <label htmlFor="password1">Jelszó:</label>
                <input type="password" id="password1" name="password1" required />
                <br />
                <label htmlFor="password2">Jelszó:</label>
                <input type="password" id="password2" name="password2" required />
                <br />
                <input type="checkbox" id="role" name="role" value="admin" />
                <label htmlFor="role">Adminisztrátor vagyok</label>
                <br />
                <button type="submit">Regisztráció</button>
            </form>
        </>
    );
};

export default RegistrationPage;