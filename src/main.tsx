import ReactDOM from 'react-dom';
import Basic from '@/router/Basic';
import UseRoutes from '@/router/UseRoutes';
import CustomRouterApp from '@/router/CustomRouter';
import PreventingApp from '@/router/Preventing';

import './index.less';
import 'antd/dist/antd.less';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';

const app = <PreventingApp />;

ReactDOM.render(app, document.getElementById('root'));
