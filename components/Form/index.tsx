import React from 'react';
import { Form } from 'antd';
import Button from '../button/button';
import Input from '../input';
import Checkbox from '../checkbox';

interface FormPropsType {
    onFinish: (values: any) => void;
}
const FormCom = (props: FormPropsType) => {
    const { onFinish } = props;
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}

                >
                    <Input />
                </Form.Item>

                <Form.Item name="agree" valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox children={'agree to authorize'} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button children={'submit'} type="primary" htmlType="submit" />
                </Form.Item>
            </Form>
        </div>
    )
};
export default FormCom;
