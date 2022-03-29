import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import DeleteModal from "./deleteModal";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { DummyData, Toggle, Update } from "../atiom";
import arrayDataModel from "../model/dummydata-model";

const Detail = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const galleryData = useRecoilValue<any>(Update);
  const SetData = useSetRecoilState(DummyData);
  const matchId: any = useMatch("/detail/:i");
  const [toggleValue, setToggleValue] = useRecoilState(Toggle);

  const clickedData =
    matchId?.params.i &&
    galleryData?.find(
      (item: arrayDataModel, i: number) => i + "" === matchId.params.i
    );
  console.log(galleryData);
  const onNext = () => {
    if (matchId.params.i >= galleryData.length) {
      matchId.params.i++;
      navigate(`/detail/${matchId.params.i}`);
    }
  };

  const onPrev = () => {
    if (matchId.params.i > 0) {
      navigate(`/detail/${matchId.params.i - 1}`);
    }
  };

  const onToggle = () => {
    setToggle((prev) => !prev);
  };

  const cardRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;
  const onDownloadBtn = () => {
    const card = cardRef.current;
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, "img.png");
    });
  };

  const onRemove = (clickedData: arrayDataModel) => {
    SetData(
      galleryData.filter(
        (item: arrayDataModel, i: number) => i + "" !== matchId.params.i
      )
    );
    setToggleValue(true);
    navigate("/");
  };

  return (
    <>
      <Top>
        <TopBtn onClick={() => navigate("/")}>x</TopBtn>
        <DownloadBtn onClick={onDownloadBtn}>
          <AiOutlineDownload />
          다운로드
        </DownloadBtn>
        <DeleteBtn onClick={onToggle}>
          <RiDeleteBinLine />
        </DeleteBtn>
      </Top>
      {toggle && (
        <DeleteModal
          onToggle={onToggle}
          onRemove={onRemove}
          clickedData={matchId}
        />
      )}
      <ImgBox>
        <Img
          ref={cardRef}
          className="img"
          src={clickedData._id}
          alt="상세이미지"
        />
      </ImgBox>
      <BtnBox>
        <ArrowBack onClick={onPrev}>
          <IoArrowBack />
        </ArrowBack>
        <ArrowForward onClick={onNext}>
          <IoArrowForward />
        </ArrowForward>
      </BtnBox>
    </>
  );
};

export default Detail;

const ImgBox = styled.div`
  max-width: 90%;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-image: cover;
`;

const Top = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: auto;
  margin-left: 30px;
  cursor: pointer;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  top: 50%;
`;

const ArrowBack = styled.button`
  border: none;
  margin-left: 30px;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const ArrowForward = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin-right: 30px;
  cursor: pointer;
`;

const DownloadBtn = styled.button`
  border: none;
  width: 90px;
  height: 30px;
  cursor: pointer;
`;

const DeleteBtn = styled.button`
  border: none;
  margin-left: 10px;
  margin-right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
