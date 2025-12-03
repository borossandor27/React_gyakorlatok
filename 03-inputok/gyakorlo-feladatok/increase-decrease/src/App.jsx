import Catcard from "./components/Catcard";
import "./App.css";

function App() {

  const cats=[{"id":"as","url":"https://cdn2.thecatapi.com/images/as.jpg","width":500,"height":375},{"id":"2as","url":"https://cdn2.thecatapi.com/images/2as.jpg","width":600,"height":399},{"id":"6o8","url":"https://cdn2.thecatapi.com/images/6o8.jpg","width":480,"height":640},{"id":"7gk","url":"https://cdn2.thecatapi.com/images/7gk.jpg","width":1024,"height":768},{"id":"8kd","url":"https://cdn2.thecatapi.com/images/8kd.jpg","width":576,"height":384},{"id":"90k","url":"https://cdn2.thecatapi.com/images/90k.jpg","width":346,"height":500},{"id":"92b","url":"https://cdn2.thecatapi.com/images/92b.gif","width":500,"height":281},{"id":"b6k","url":"https://cdn2.thecatapi.com/images/b6k.jpg","width":2736,"height":3648},{"id":"c5o","url":"https://cdn2.thecatapi.com/images/c5o.jpg","width":900,"height":550},{"id":"dnf","url":"https://cdn2.thecatapi.com/images/dnf.jpg","width":800,"height":531}];
  
  return (
    <div className="app-container">
            <h1 className="app-title">
                Macska Kedvelés Számláló
            </h1>
            <div className="cat-card-grid">
                {cats.map(cat => (
                    <Catcard
                        key={cat.id}
                        imageURL={cat.url}
                        imageWidth={cat.width}
                        imageHeight={cat.height}
                    />
                ))}
            </div>
            <footer className="app-footer">
                Készült React és CSS használatával.
            </footer>
    </div>
  )
}

export default App
