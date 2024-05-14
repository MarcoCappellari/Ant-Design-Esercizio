// File ListaPost.js
import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import Post from './Post';
import CreazionePost from './CreazionePost';

const ListaPost = () => {

    const [list, setList] = useState([]);
    const postUrl = "https://jsonplaceholder.typicode.com/posts"; //API dove prendo i post

    useEffect(() => {
        fetch(postUrl)
            .then((res) => res.json())
            .then((res) => {
                setList(res); //salvo i post dell API dentro List
            });
    }, []);

    //Metodo eliminazione POST
    const eliminaPost = (postId) => {
        const updatedPosts = list.filter(post => post.id !== postId);
        setList(updatedPosts);
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore durante l\'eliminazione del post');
                }
                console.log('Post eliminato con successo');
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    };

    //Metodo aggiunta POST
    const aggiungiPost = (nuovoPost) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: nuovoPost.title,
                body: nuovoPost.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                setList([...list, json]);
                console.log(json);
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    };

    //Metodo modifica POST
    const ModificaPost = (postId, title, body, userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: postId,
                title: title,
                body: body,
                userId: userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore durante la modifica del post');
                }
                console.log('Post modificato con successo');
                return response.json();
            })
            .then(updatedPost => {
                const updatedData = list.map(post => {
                    if (post.id === postId) {
                        return updatedPost;
                    }
                    return post;
                });
                setList(updatedData);
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    };

    return (
        <>
            {/*Form per inserimento di un nuovo POST*/}
            <CreazionePost aggiungiPost={aggiungiPost}></CreazionePost>
            {/*Form per inserimento di un nuovo POST*/}
            <h2>Post:</h2>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, index) => <Post item={item} elimina={() => (eliminaPost(item.id))} modifica={ModificaPost} index={index}/>}
            />
        </>
    );
};

export default ListaPost;
