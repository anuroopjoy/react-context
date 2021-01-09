import * as React from 'react';

import './Nav.css';
import '../List/List';
import List from '../List/List';
import ThemeContext from '../ThemeContext';
class Nav extends React.Component {
    render() {
        let className = 'Nav';
        const { theme } = this.context;
        if (theme) {
            className = `${className} ${theme}`;
        }
        return (
            <div className={className}>
                <List></List>
            </div>
        );
    }
}

Nav.contextType = ThemeContext
export default Nav;
