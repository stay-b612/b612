import React from 'react';
import styled from '@emotion/styled';

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  background-color: rgba(207, 181, 242, 0.7);
  border: none;
  border-radius: 30px;
  padding: 30px;
`;

function ItemsModal() {
  return (
    <Modal>
      <div>items</div>
    </Modal>
  );
}

export default ItemsModal;
