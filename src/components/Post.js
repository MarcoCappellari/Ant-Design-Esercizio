import React, { useState } from 'react';
import { List,  Avatar} from 'antd';
import EliminaPost from './EliminaPost';
import PulsanteModificaPost from './PulsanteModificaPost';

const Post = ({ item, elimina, modifica , index}) => {
    const [eliminaModalVisible, setEliminaModalVisible] = useState(false);

    const confermaEliminazione = () => {
        elimina(item.id);
        setEliminaModalVisible(false); 
    };

    return (
        <List.Item
            actions={[ 
                //sono le ACTION, non sono pulsanti
                <PulsanteModificaPost item={item} modifica={modifica} />,
                <a  onClick={() => setEliminaModalVisible(true)}>delete</a>
            ]}
        >
                <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />} //API per avatar
                    title={<a href="#">[{item.id}][{item.title}]</a>}
                    description={item.body}
                />
                <div></div>

                {eliminaModalVisible && (
                <EliminaPost
                    elimina={confermaEliminazione} 
                    onCancel={() => setEliminaModalVisible(false)} 
                />
            )}


        </List.Item>
    );
};

export default Post;