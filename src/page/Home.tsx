import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrayDataModel from '../model/dummydata-model';

const Home = () => {
  let Data = JSON.parse(localStorage.getItem('updataData') || '');

  useEffect(() => {
    console.log(Data);
  }, [Data]);
  return (
    <Section>
      <Top>
        <Span>{Data?.length}개의 랜더샷</Span>
        <Title>갤러리</Title>
      </Top>
      <ImgContainer>
        {Data?.map((item: arrayDataModel, i: number) => {
          return (
            <Link to={`/detail/${i}`} key={i}>
              <Box>
                <Img src={item._id} alt='사진' />
              </Box>
            </Link>
          );
        })}
      </ImgContainer>
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
  gap: 5px;
`;

const Box = styled.div`
  width: 330px;
  height: 190px;
  overflow: hidden;
  border-radius: 15px;
`;

const Img = styled.img`
  background-image: cover;
  background-position: center center;
  width: 100%;
`;
