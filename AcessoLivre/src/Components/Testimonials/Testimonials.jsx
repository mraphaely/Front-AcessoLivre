import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import {
  TestimonialsSection,
  TestimonialsContainer,
  SectionHeader,
  Eyebrow,
  SectionTitle,
  SectionDescription,
  CardsRow,
  CarouselWrapper,
  TestimonialCard,
  Avatar,
  Quote,
  UserName,
  CtaButton,
} from '../../Styles/TestimonialsStyles';

const testimonials = [
  {
    id: 1,
    quote:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    user: 'User_Y',
  },
  {
    id: 2,
    quote:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    user: 'User_Y',
  },
  {
    id: 3,
    quote:
      '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
    user: 'User_Y',
  },
];

function Testimonials() {
  const navigate = useNavigate();

  return (
    <TestimonialsSection>
      <TestimonialsContainer>
        <SectionHeader>
          <Eyebrow>Depoimentos</Eyebrow>
          <SectionTitle>O que dizem sobre nós</SectionTitle>
          <SectionDescription>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that English.
          </SectionDescription>
        </SectionHeader>

        <CardsRow>
          {testimonials.map((item) => (
            <TestimonialCard key={item.id}>
              <Avatar>
                <FaUserCircle />
              </Avatar>
              <Quote>{item.quote}</Quote>
              <UserName>{item.user}</UserName>
            </TestimonialCard>
          ))}
        </CardsRow>

        <CarouselWrapper>
          <Carousel interval={6000} indicators controls>
            {testimonials.map((item) => (
              <Carousel.Item key={item.id}>
                <TestimonialCard>
                  <Avatar>
                    <FaUserCircle />
                  </Avatar>
                  <Quote>{item.quote}</Quote>
                  <UserName>{item.user}</UserName>
                </TestimonialCard>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselWrapper>

        <CtaButton onClick={() => navigate('/comecar')}>Começar</CtaButton>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
}

export default Testimonials;
