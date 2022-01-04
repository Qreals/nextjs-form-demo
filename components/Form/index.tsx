import React from 'react';
import { Form } from 'antd';
import Button from '../button/button';
import Input from '../input';
import Checkbox from '../checkbox';
const FormCom = () => {
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
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

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button style={{ width: 100 }} type="primary" htmlType="submit" />
                </Form.Item>
            </Form>
        </div>
    )
};
export default FormCom;
