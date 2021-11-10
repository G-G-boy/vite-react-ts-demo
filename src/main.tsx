import ReactDOM from 'react-dom';
import Basic from '@/router/Basic';
import UseRoutes from '@/router/UseRoutes';
import CustomRouterApp from '@/router/CustomRouter';

import './index.less';
import 'antd/es';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';

const app = <CustomRouterApp />;

ReactDOM.render(app, document.getElementById('root'));
