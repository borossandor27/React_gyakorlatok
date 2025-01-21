import "./App.css"; // Külső CSS fájl importálása

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Üdvözöllek az oldalon!</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Kezdőlap</a></li>
            <li><a href="#about">Rólunk</a></li>
            <li><a href="#contact">Kapcsolat</a></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="section">
          <h2>Kezdőlap</h2>
          <p>Ez egy példaszöveg, ami bemutatja, hogyan nézhet ki egy React alkalmazás renderelve.</p>
        </section>
        <section id="about" className="section">
          <h2>Rólunk</h2>
          <p>Ez az oldal egyszerű példa arra, hogy a React-ben hogyan használhatjuk az external CSS fájlt.</p>
        </section>
        <section id="contact" className="section">
          <h2>Kapcsolat</h2>
          <p>Írj nekünk: <a href="mailto:info@example.com">info@example.com</a></p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2025 Példa React Oldal</p>
      </footer>
    </div>
  );
}

export default App;
