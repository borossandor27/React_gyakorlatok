import { ThemeProvider } from './ThemeProvider';
import Header from './Header';
import Content from './Content';

const App = () => {
    return (
        <ThemeProvider>
            <Header />
            <Content />
        </ThemeProvider>
    );
};

export default App;
