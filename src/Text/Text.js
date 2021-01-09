import { useContext } from 'react';
import ThemeContext from '../ThemeContext';
import UserContext from '../UserContext';
import './Text.css';

function Text() {
    const { theme } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return <p className={theme}>Hello {user}</p>;
}

export default Text;
