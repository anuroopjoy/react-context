
import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import './List.css';

function List() {
    let className = 'List';
    const { theme } = useContext(ThemeContext);
    if (theme) {
        className = `${className} ${theme}`
    }
    return (
        <ul className={className}>
            <li>
                <a className="active" href="#home">
                    Home
                </a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
        </ul>
    );
}

export default List;
