import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Toggle } from '../atiom';

const DeleteModal = ({ onToggle, onRemove, clickedData }: any) => {
  const onCloseModal = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onToggle();
    }
  };
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Dim onClick={onCloseModal}>
      <ModalBox>
        <ImgGif
          src='https://resources.archisketch.com/editor/assets_test/img/pop-up/gallery_delete@2x.gif'
          alt='삭제 gif'
        />
        <P>확인</P>
        <Span>정말 이 이미지를 삭제 하시겠습니까?</Span>
        <DeleteBtn onClick={() => onRemove(clickedData)}>삭제</DeleteBtn>
        <BackBtn onClick={onCloseModal}>돌아가기</BackBtn>
      </ModalBox>
    </Dim>
  );
};

export default DeleteModal;

const Dim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 9;
`;

const ModalBox = styled.div`
  width: 440px;
  height: 540px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const ImgGif = styled.img`
  width: 440px;
  height: 220px;
  border-radius: 16px 16px 0 0;
`;

const P = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Span = styled.span`
  font-size: 17px;
  color: #8b8b8b;
`;

const DeleteBtn = styled.button`
  width: 392px;
  height: 48px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 24px;
  border: 0;
  border-radius: 4px;
  background: #6db2c5;
  color: #fff;
  cursor: pointer;
`;

const BackBtn = styled.button`
  color: #6db2c5;
  border: none;
  background-color: transparent;
`;
