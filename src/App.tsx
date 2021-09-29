import type {FC} from 'react';
import {Button} from 'antd';

const handleClick = () => {
    console.log('click');
};

const App: FC = () => {
    return (
        <div className="w-full h-full bg-gray-200 flex justify-center items-center">
            <Button type="primary" onClick={handleClick}>
                click
            </Button>
        </div>
    );
};

export default App;
