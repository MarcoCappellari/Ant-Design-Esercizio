import React, { useEffect, useState } from 'react';
import { Button, List } from 'antd';
import Post from './Post';
import CreazionePost from './CreazionePost';

const ListaPost = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  const postUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(postUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res);
        setList(res);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    fetch(postUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res);
        setData(newData);
        setList(newData);
        setLoading(false);
        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;


    const eliminaPost = (postId) => {
        // Rimuovi il post con l'ID corrispondente
        const updatedPosts = list.filter(post => post.id !== postId);
        // Aggiorna lo stato locale con i post aggiornati
        setList(updatedPosts);
        // Invia la richiesta di eliminazione al server
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
                // Se c'è un errore durante l'eliminazione del post, ripristina lo stato locale
                setData(data);
            });
    };

    const aggiungiPost = (nuovoPost) => {
        // Invia la richiesta POST al server per aggiungere il nuovo post
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: nuovoPost.title,
                body: nuovoPost.body,
                userId: 1, // Assumi che l'ID dell'utente sia 1 per semplicità
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                // Aggiungi il nuovo post alla lista locale dei post
                setList([...list, json]); // Aggiungi il nuovo post restituito dall'API allo stato locale
                console.log(json);
            })
            .catch(error => {
                console.error('Errore:', error);
            });
    };


  return (
    <>
    <CreazionePost aggiungiPost={aggiungiPost}></CreazionePost>
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => <Post item={item} elimina ={ () => (eliminaPost(item.id))} />} // Passa l'elemento di lista come prop
    />
    </>
  );
};

export default ListaPost;
