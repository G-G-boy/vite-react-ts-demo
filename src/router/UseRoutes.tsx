import type {FC} from 'react';
import {Button} from 'antd';
import {
    useSearchParams,
    useNavigate,
    Outlet,
    BrowserRouter,
    useRoutes,
    createSearchParams,
} from 'react-router-dom';

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
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('xxxx'));
    return (
        <>
            <h1>About</h1>
            <Button
                onClick={() => {
                    setSearchParams({a: '2'});
                }}
            >
                Record
            </Button>
            <Button
                onClick={() => {
                    setSearchParams([['c', '3']]);
                }}
            >
                ParamKeyValuePair
            </Button>
            <Button
                onClick={() => {
                    setSearchParams('d=4&e=5');
                }}
            >
                str
            </Button>
            <Button
                onClick={() => {
                    const url = new URLSearchParams({f: '6'});
                    setSearchParams(url);
                }}
            >
                URLSearchParams
            </Button>
            <Button
                onClick={() => {
                    const url = createSearchParams({g: '7'});
                    setSearchParams(url);
                }}
            >
                createSearchParams
            </Button>
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

const UseRoutes: FC = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default UseRoutes;
