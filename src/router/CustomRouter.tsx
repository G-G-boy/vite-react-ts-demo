import {FC} from 'react';
import {Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import history from '@/utils/history';
import {Button} from 'antd';
import CustomRouter from '@/components/CustomRouter';

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

const App: FC = () => {
    return (
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
    );
};

const CustomRouterApp: FC = () => {
    return (
        <>
            <Button
                onClick={() => {
                    history.push('/about');
                }}
            >
                history
            </Button>
            <CustomRouter>
                <App />
            </CustomRouter>
        </>
    );
};

export default CustomRouterApp;
