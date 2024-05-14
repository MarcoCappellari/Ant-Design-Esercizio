import React, { useState } from 'react';
import { List, Skeleton, Avatar } from 'antd';
import EliminaPost from './EliminaPost';

const Post = ({ item, elimina }) => {
    const [eliminaModalVisible, setEliminaModalVisible] = useState(false);

    const confermaEliminazione = () => {
        elimina(item.id);
        setEliminaModalVisible(false); // Chiudi il modal dopo aver confermato l'eliminazione
    };

    return (
        <List.Item
            actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more" onClick={() => setEliminaModalVisible(true)}>delete</a>
            ]}
        >
            <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                    avatar={<Avatar src="https://via.placeholder.com/150" />}
                    title={<a href="#">[{item.id}][{item.title}]</a>}
                    description={item.body}
                />
                <div>content</div>
            </Skeleton>
            {eliminaModalVisible && (
                <EliminaPost
                    elimina={confermaEliminazione} // Passa la funzione corretta
                    onCancel={() => setEliminaModalVisible(false)} // Gestisci la chiusura del modal
                />
            )}

        </List.Item>

    );
};


export default Post;