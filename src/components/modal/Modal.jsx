import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/button/ButtonStyled.styled';
import {
  ModalStyled,
  OverlayStyled,
} from 'components/modal/ModalStyled.styled';

export const Modal = ({ toogleModal, urlModal }) => {
  useEffect(() => {
    function closeModal(e) {
      if (e.code === 'Escape') {
        toogleModal();
        return;
      }
    }
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });
  const closedModal = e => {
    if (e.currentTarget === e.target) {
      toogleModal();
    }
  };
  return (
    <OverlayStyled onClick={closedModal}>
      <ModalStyled>
        <img src={urlModal} alt="foto" />
        <ButtonStyled type="button" onClick={toogleModal}>
          close
        </ButtonStyled>
      </ModalStyled>
    </OverlayStyled>
  );
};
Modal.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  urlModal: PropTypes.string.isRequired,
};
