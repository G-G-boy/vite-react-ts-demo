import type { FC } from 'react';
import { Button } from 'antd';

const handleClick = () => {
    const body = document.getElementsByTagName('body')[0];
    const styleLink = document.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'theme-style';
    styleLink.href = '/theme/green.css';
    body.className = 'body-wrap-green';
    document.body.append(styleLink);
};

const App: FC = () => {
    console.log(window.vite_plugin_ant_themeVar);
    return (
        <div>
            <Button type="primary" onClick={handleClick}>
                green
            </Button>
        </div>
    );
};

export default App;
