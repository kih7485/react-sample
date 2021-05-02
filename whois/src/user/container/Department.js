import { Button, Input, message } from 'antd';
import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../state';

export default function Department() {
    const [isEditDepartMent, setIsEditDepartment] = useState(false);
    const [tempDepartMent, setTempDepartMent] = useState('');
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    function onSaveDepartment() {
        if (tempDepartMent) {
            dispatch(
                actions.fetchUpdateUser({
                    user,
                    key: 'department',
                    value: tempDepartMent,
                    fetchKey: 'department'
                })
            );
            setIsEditDepartment(false);
        } else {
            message.error('소속은 필수 값입니다.');
        }
    }
    function onEditDepartment() {
        setIsEditDepartment(true);
        setTempDepartMent(user.department);
    }

    return (
        <>
            {isEditDepartMent && (
                <Input
                    autoFocus
                    // ref={ref => ref && ref.focus()}
                    value={tempDepartMent}
                    onChange={e => setTempDepartMent(e.target.value)}
                    onPressEnter={onSaveDepartment}
                    onBlur={() => setIsEditDepartment(false)}
                    style={{width: '100%'}}
                />
            )}

            {!isEditDepartMent && (
                <Button
                    type="text"
                    block
                    onClick={onEditDepartment}
                    style={{ textAlign:'left', padding:0}}
                >
                    {user.department}
                </Button>
            )}
        </>
    )
}
