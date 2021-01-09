import * as React from 'react';

import './App.css';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import { ThemeProvider } from './ThemeContext';
import { UserProvider } from './UserContext';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState((state) => ({
                theme: state.theme === 'dark' ? 'light' : 'dark'
            }));
        };

        this.state = {
            theme: 'dark',
            toggleTheme: this.toggleTheme
        };

        this.user = 'John';
    }

    render() {
        return (
            <div className="App">
                <ThemeProvider value={this.state}>
                    <Nav></Nav>
                    <UserProvider value={this.user}>
                        <Main></Main>
                    </UserProvider>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
