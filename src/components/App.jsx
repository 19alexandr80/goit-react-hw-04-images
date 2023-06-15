import { useState, useEffect } from 'react';
import { NewApi } from 'API/Api';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from 'components/modal/Modal';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

import { AppStyled } from 'components/AppStyled.styled';

const api = new NewApi();

export const App = () => {
  const [list, setList] = useState([]);
  const [status, setStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urlModal, setUrlModal] = useState('');
  const [name, setName] = useState('');
  const [pege, setPege] = useState('');
  useEffect(() => {
    const ffff = async () => {
      if (!name) {
        return;
      }
      setStatus(true);
      try {
        const data = await api.getUser(name, pege);
        if (!data.hits.length) {
          alert('invalid name ');
          return;
        }
        setList(prev => {
          return [...prev, ...data.hits];
        });
      } catch (error) {
        console.error(error.messeng);
      } finally {
        setStatus(false);
        return;
      }
    };
    ffff();
  }, [name, pege]);

  const listClearing = () => {
    setList([]);
    setPege(1);
  };
  const onSubmit = add => {
    if (add === name) {
      alert('Result on screen');
      return;
    }
    listClearing();
    setName(add);
  };
  const onClickButton = () => {
    setPege(prev => prev + 1);
  };
  const toogleModal = e => {
    setShowModal(prev => !prev);
    if (e) {
      const url = e.currentTarget.dataset.url;
      setUrlModal(url);
    }
  };
  return (
    <AppStyled>
      <Searchbar onSubmit={onSubmit} />
      {list.length !== 0 && (
        <ImageGallery list={list} toogleModal={toogleModal} />
      )}
      {status && <Loader />}
      {list.length !== 0 && !status && <Button onClick={onClickButton} />}
      {showModal && <Modal urlModal={urlModal} toogleModal={toogleModal} />}
    </AppStyled>
  );
};
