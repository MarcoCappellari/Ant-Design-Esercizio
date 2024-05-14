import React from 'react';
import { Button, Form, Input } from 'antd';

const CreazionePost = ({ aggiungiPost }) => {
  const onFinish = (values) => {
    // Passa i valori del form alla funzione aggiungiPost
    aggiungiPost(values);
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
    <h1>Crea un nuovo Post:</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Titolo Post"
        name="title"
        rules={[
          {
            required: true,
            message: 'Inserisci il titolo del post!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Messaggio"
        name="body"
        rules={[
          {
            required: true,
            message: 'Inserisci il messaggio del post!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Pubblica Post
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default CreazionePost;