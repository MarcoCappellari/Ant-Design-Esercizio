import React from 'react';
import { Button, Form, Input } from 'antd';

const CreazionePost = ({ aggiungiPost }) => {
  const [formGigi] = Form.useForm(); // Utilizza il hook useForm per ottenere l'istanza del form

  const onFinish = (values) => {
    // Passa i valori del form alla funzione aggiungiPost
    aggiungiPost(values);
    console.log('Success:', values);
    formGigi.resetFields(); // Resettare i campi del form dopo averlo inviato con successo
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <h1>Crea un nuovo Post:</h1>
      <Form
        form={formGigi} // Passa l'istanza del form al Form component
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 40,
        }}
        style={{
          maxWidth: 600,
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
