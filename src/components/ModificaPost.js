import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const EditPostModal = ({ visible, onCancel, item, modifica }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        modifica(item.id, values.title, values.body, item.userId);
        onCancel(); 
    };

    return (
        <Modal
            title="Edit Post"
            open={visible}
            onCancel={onCancel}
            footer={null} 
        >
            <Form
                form={form}
                name="edit_post_form"
                onFinish={onFinish}
                initialValues={{
                    title: item.title, 
                    body: item.body,
                }}
            >
                <Form.Item
                    name="title"
                    label="title"
                    rules={[{ required: true, message: 'Please input the title!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="body"
                    label="body"
                    rules={[{ required: true, message: 'Please input the body!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default EditPostModal;
