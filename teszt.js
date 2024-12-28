import React from 'react';
import Greeting from './Greeting';

class App extends React.Component {
    render() {
        return (
            <div>
                <Greeting name="Anna" />
            </div>
        );
    }
}

export default App;
