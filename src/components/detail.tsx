import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RootState } from '../redux/reducers';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';

const Detail = () => {
  const deipatch = useDispatch();
  const navigate = useNavigate();
  const DataList: any = useSelector(
    (state: RootState) => state.DummyData.data.renderings
  );
  const matchId: any = useMatch('/detail/:i');

  const clickedData =
    matchId?.params.i &&
    DataList?.find((item: any, i: any) => i + '' === matchId.params.i);

  const onNext = () => {
    matchId.params.i++;
    navigate(`/detail/${matchId.params.i}`);
  };

  const onPrev = () => {
    if (matchId.params.i > 0) {
      navigate(`/detail/${matchId.params.i - 1}`);
    }
  };

  return (
    <>
      <Top>
        <TopBtn onClick={() => navigate('/')}>x</TopBtn>
        <DownloadBtn>
          <AiOutlineDownload />
          다운로드
        </DownloadBtn>
        <DeleteBtn>
          <RiDeleteBinLine />
        </DeleteBtn>
      </Top>
      <ImgBox>
        <Img src={clickedData?._id} alt='상세이미지' />
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
