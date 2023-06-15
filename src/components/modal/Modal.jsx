import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from 'components/button/ButtonStyled.styled';
import {
  ModalStyled,
  OverlayStyled,
} from 'components/modal/ModalStyled.styled';

export const Modal = ({ toogleModal, urlModal }) => {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.closeModal);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.closeModal);
  // }
  // closeModal = e => {
  //   if (e.code === 'Escape') {
  //     this.props.toogleModal();
  //   }
  // };
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
