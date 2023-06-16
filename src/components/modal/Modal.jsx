import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/button/ButtonStyled.styled';
import {
  ModalStyled,
  OverlayStyled,
} from 'components/modal/ModalStyled.styled';

export const Modal = ({ toogleModal, urlModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', closedModal);
    return () => {
      window.removeEventListener('keydown', closedModal);
    };
  });
  const closedModal = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
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
