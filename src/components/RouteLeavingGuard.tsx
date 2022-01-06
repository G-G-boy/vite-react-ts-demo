import {Location, Transition} from 'history';
import {FC, useCallback, useState, useRef} from 'react';
import {Modal} from 'antd';
import {useLocation} from 'react-router-dom';
import {useBlocker} from '@/hooks';
import {isEqual} from 'lodash';

interface RouteLeavingGuardProps {
    when: boolean;
    message: string;
    complete?: () => void | Promise<void>;
    shouldBlockNavigation?: (location: Location) => boolean;
}

function isPromise<T = any>(fun: any): fun is Promise<T> {
    return typeof fun === 'object' && fun.then;
}

function removeKey(location: Location) {
    const {key, ...newLocation} = location;
    return newLocation;
}

/**
 * 路由跳转提示
 */
const RouteLeavingGuard: FC<RouteLeavingGuardProps> = ({
    when,
    message,
    complete,
    shouldBlockNavigation,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmedNavigation, setConfirmedNavigation] = useState(false);
    const txRef = useRef<Transition>();
    const location = useLocation();

    const handleConfirmNavigationClick = () => {
        setModalVisible(false);
        setConfirmedNavigation(true);
        txRef.current?.retry();
    };

    const blocker = useCallback(
        (tx: Transition) => {
            console.log(tx);
            txRef.current = tx;
            const shouldBlock = shouldBlockNavigation && shouldBlockNavigation(tx.location);
            if (
                !confirmedNavigation &&
                shouldBlock &&
                !isEqual(removeKey(tx.location), removeKey(location))
            ) {
                setModalVisible(true);
            }
        },
        [confirmedNavigation, shouldBlockNavigation, location],
    );

    useBlocker(blocker, when);

    return (
        <>
            <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onOk={handleConfirmNavigationClick}
            >
                <h3>{message}</h3>
            </Modal>
        </>
    );
};

RouteLeavingGuard.defaultProps = {
    shouldBlockNavigation: (location) => true,
};

export default RouteLeavingGuard;
