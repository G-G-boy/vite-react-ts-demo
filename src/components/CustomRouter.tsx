import {FC, useLayoutEffect, useRef, useState} from 'react';
import history from '@/utils/history';
import {Router, BrowserRouterProps} from 'react-router-dom';
import {createBrowserHistory, BrowserHistory} from 'history';

const CustomRouter: FC<BrowserRouterProps & {history?: BrowserHistory}> = ({
    history,
    basename,
    children,
    window,
}) => {
    const historyRef = useRef<BrowserHistory | undefined>(history);
    if (historyRef.current == null) {
        historyRef.current = createBrowserHistory({window});
    }

    const _history = historyRef.current;
    const [state, setState] = useState({
        action: _history.action,
        location: _history.location,
    });

    useLayoutEffect(() => _history.listen(setState), [_history]);

    return (
        <Router
            basename={basename}
            children={children} // eslint-disable-line react/no-children-prop
            location={state.location}
            navigationType={state.action}
            navigator={_history}
        />
    );
};

CustomRouter.defaultProps = {
    history,
};

export default CustomRouter;
