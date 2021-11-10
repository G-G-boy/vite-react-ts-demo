import type {FC} from 'react';
import {Button} from 'antd';
import {Routes, Route, useNavigate, Outlet, BrowserRouter} from 'react-router-dom';

const NotFound: FC = () => {
    return (
        <div>
            <h1>not found</h1>
        </div>
    );
};

const Layout: FC = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Layout</h1>
            <div>
                <Button
                    onClick={() => {
                        navigate('/about?xxxx=111');
                    }}
                >
                    goto About
                </Button>

                <Button
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    goto Home
                </Button>
            </div>
            <Outlet />
        </div>
    );
};

const Home: FC = () => {
    return (
        <>
            <h1>Home</h1>
        </>
    );
};

const About: FC = () => {
    return (
        <>
            <h1>About</h1>
        </>
    );
};

const Basic: FC = () => {
    return (
        <BrowserRouter>
            <div className="w-full h-full bg-gray-200 p-20">
                <h1>Welcome to React Router!</h1>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Basic;
