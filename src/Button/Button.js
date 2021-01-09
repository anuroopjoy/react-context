import { useContext } from 'react';

import ThemeContext from '../ThemeContext';
import './Button.css';

function Button() {
  let className = 'button';
    const { theme, toggleTheme } = useContext(ThemeContext);
    if (theme) {
        className = `${className} ${theme}`
    }
    return (
        <button className={className} onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
}

export default Button;
