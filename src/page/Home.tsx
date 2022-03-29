import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { FullDummyData, Toggle, Update } from '../atiom';
import arrayDataModel from '../model/dummydata-model';

interface DummyDatamodel {
  _id: string;
}

const Home = () => {
  const renderData = useRecoilValue(Update);
  const Data = useRecoilValue(FullDummyData);
  let UpdateData = JSON.parse(localStorage.getItem('updataData') || '');
  const ToggleValue = useRecoilValue(Toggle);

  useEffect(() => {}, [renderData]);
  useEffect(() => {}, [UpdateData]);
  return (
    <Section>
      {ToggleValue ? (
        <>
          <Top>
            <Span>{UpdateData?.length}개의 랜더샷</Span>
            <Title>갤러리</Title>
          </Top>
          <ImgContainer>
            {UpdateData?.map((item: arrayDataModel, i: number) => {
              return (
                <Link to={`/detail/${i}`} key={i}>
                  <Box>
                    <Img src={item._id} alt='사진' />
                  </Box>
                </Link>
              );
            })}
          </ImgContainer>
        </>
      ) : (
        <>
          <Top>
            <Span>{Data?.renderings.length}개의 랜더샷</Span>
            <Title>갤러리</Title>
          </Top>
          <ImgContainer>
            {Data?.renderings.map((item: DummyDatamodel, i: number) => {
              return (
                <Link to={`/detail/${i}`} key={i}>
                  <Box>
                    <Img src={item._id} alt='사진' />
                  </Box>
                </Link>
              );
            })}
          </ImgContainer>
        </>
      )}
    </Section>
  );
};

export default Home;

const Section = styled.section`
  margin: 0 40px 0 40px;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Span = styled.span`
  position: absolute;
  left: 100px;
`;

const ImgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  justify-items: center;
  @media only screen and (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Box = styled.div`
  max-width: 330px;
  width: 100%;
  height: 190px;
  overflow: hidden;
  border-radius: 15px;
`;

const Img = styled.img`
  background-image: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`;
