import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { StyledH1 } from "./Typographies";

const SliderContainer = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
  background-color: ${(props) => props.theme.appSkeletonFrom};
  text-align: center;
  color: ${(props) => props.theme.appColor};
  border-radius: 10px;
`;

const ImageBox = styled(Box)`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageText = styled(Typography)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
`;


const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: "/images/banda1.jpg",
      title: "Banda 1",
      description: "Descrição da banda 1",
    },
    {
      img: "/images/banda2.jpg",
      title: "Banda 2",
      description: "Descrição da banda 2",
    },
    {
      img: "/images/banda3.jpg",
      title: "Banda 3",
      description: "Descrição da banda 3",
    },
  ];

  return (
    <SliderContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <ImageBox key={index}>
            <StyledH1>{slide.title}</StyledH1>
            <StyledImage 
            src={slide.img}
             alt="imagem da banda" 
             />
            <ImageText variant="h5">{slide.description}</ImageText>
          </ImageBox>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
