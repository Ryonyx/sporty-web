import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  box-shadow: 0 -2px 12px rgba(#000, 0.3);
  padding: 10px 12px;
  transform: translateY(45%);
  transition: transform 450ms ease-in-out 0s;
  cursor: pointer;
`;

const Text = styled.p`
  color: #555;
  margin: 0.5rem 0;
  line-height: 1.25;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  width: 25rem;
  height: 17rem;
  margin: 1rem;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.85);
  transition: all 450ms ease-out 0s;
  background-image: url('https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg');
  background-size: cover;

  &:hover {
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.85);

    ${TextContainer} {
      background: rgba(255, 255, 255, 0.8);
      transform: translateY(0);
    }
  }
`;

const sports = ['fotbal', 'tenis', 'bowling', 'pingpong'];

export const Boxes: React.FC = () => (
  <Container>
    {sports.map((sport, index) => (
      <Link href="/detail" key={index}>
        <Card>
          <TextContainer>
            <h2>{sport}</h2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              sodales posuere felis non efficitur. Mauris mollis elit urna, id
              tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus sodales posuere felis non efficitur. Mauris mollis elit
              urna, id tempus.
            </Text>
          </TextContainer>
        </Card>
      </Link>
    ))}
  </Container>
);