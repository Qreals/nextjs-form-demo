import React, { useEffect, useState } from 'react'
import { message } from 'antd';
import { getLoginData } from '../../api';
import FormCom from '../../components/Form'
interface dataType {
    username: string;
    password: string;
}
const FirstPost = () => {
    const [data, setData] = useState<dataType>();
    useEffect(() => {
        getLoginData().then((res => {
            setData(res)
        }));
    })
    const onFinish = (values: any) => {
        const { username, password, agree } = values;
        if (!agree) {
            message.warning('please agree to authorize!')
        } else {
            if (data?.username === username && data?.password === password) {
                message.success('login successful!')
            } else {
                message.error('Incorrect account name or password')
            }
        }

    };
    return (
        <>
            <div style={{ margin: '20px auto', width: 300, height: 300, border: '1px solid #f0f0f0', padding: 20 }}>
                <FormCom onFinish={onFinish} />
            </div>
        </>
    )
};

export default FirstPost;
