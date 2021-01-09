import {useContext} from 'react';

import ThemeContext from '../ThemeContext';
import './Link.css';

function Link() {
    let className = 'App-link';
    const { theme } = useContext(ThemeContext);
    if (theme) {
        className = `${className} ${theme}`
    }
  return (
        <a
          className={className}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  );
}

export default Link;
