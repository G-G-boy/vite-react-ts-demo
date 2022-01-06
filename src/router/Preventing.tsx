import type {FC} from 'react';
import {Button} from 'antd';
import {useNavigate, Outlet, useRoutes} from 'react-router-dom';
import RouteLeavingGuard from '@/components/RouteLeavingGuard';
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
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/');
    };

    return (
        <>
            <h1>About</h1>
            <Button onClick={gotoHome}>goto Home</Button>
            <RouteLeavingGuard message={'离开这个页面'} when={true} />
        </>
    );
};

const App: FC = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: '/about',
                    element: <About />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]);
    return (
        <div className="w-full h-full bg-gray-200 p-20">
            <h1>Welcome to React Router!</h1>
            {element}
        </div>
    );
};

const PreventingApp: FC = () => {
    return (
        <CustomRouter>
            <App />
        </CustomRouter>
    );
};

export default PreventingApp;
