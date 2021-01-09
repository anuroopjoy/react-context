import './Main.css';
import logo from '../logo.svg';
import Text from '../Text/Text';
import Link from '../Link/Link';
import Button from '../Button/Button';
import ThemeContext from '../ThemeContext';

function Main() {
    let className = 'Main';
    return (
        <ThemeContext.Consumer>
            {({ theme }) => {
                if (theme) {
                    className = `${className} ${theme}`;
                }
                return (
                    <div className={className}>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <Text></Text>
                            <Link></Link>
                            <Button></Button>
                        </header>
                    </div>
                );
            }}
        </ThemeContext.Consumer>
    );
}

export default Main;
