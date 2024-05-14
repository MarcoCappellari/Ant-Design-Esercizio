import { Form, Input, Button } from 'antd';


function FormModifica({ editingPost, ModificaPost }) {
    const [form] = Form.useForm(); // Otteniamo l'istanza del form

    const handleSubmit = (values) => {

        //const { title, body } = values; // Estrai title e body da values
       // ModificaPost(editingPost.id, title, body); // Passa i parametri separati a ModificaPost
        console.log(values)
    };

    return (
        <>
            <Form
                layout="inline"
                form={form} // Passiamo l'istanza del form come proprietà
                onFinish={handleSubmit}
                style={{
                    maxWidth: 'none',
                }}
            >
                <Form.Item label="Titolo post" name="title" initialValue={editingPost.title}>
                    <Input placeholder="Inserisci il titolo del post" />
                </Form.Item>
                <Form.Item label="Body" name="body" initialValue={editingPost.body}>
                    <Input.TextArea placeholder="Inserisci il messaggio" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit'>
                        Salva modifiche
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default FormModifica;