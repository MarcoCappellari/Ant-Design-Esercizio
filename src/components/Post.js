import React, { useState } from 'react';
import { List, Skeleton, Avatar} from 'antd';
import EliminaPost from './EliminaPost';
import ModificaPost from './ModificaPost'; 

const Post = ({ item, elimina, modifica }) => {
    const [eliminaModalVisible, setEliminaModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const confermaEliminazione = () => {
        elimina(item.id);
        setEliminaModalVisible(false); 
    };

    return (
        <List.Item
            actions={[
                <a key="list-loadmore-edit" onClick={() => setEditModalVisible(true)}>edit</a>,
                <a key="list-loadmore-more" onClick={() => setEliminaModalVisible(true)}>delete</a>
            ]}
        >
            <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                    avatar={<Avatar src="https://via.placeholder.com/150" />}
                    title={<a href="#">[{item.id}][{item.title}]</a>}
                    description={item.body}
                />
                <div></div>
            </Skeleton>
            {eliminaModalVisible && (
                <EliminaPost
                    elimina={confermaEliminazione} 
                    onCancel={() => setEliminaModalVisible(false)} 
                />
            )}

            <ModificaPost
                visible={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                item={item}
                modifica={modifica}
            />
        </List.Item>
    );
};

export default Post;