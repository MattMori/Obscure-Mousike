import { Container } from "@mui/material";
import { Header } from "@/components";
import { ImageSlider } from "@/components";

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <ImageSlider />
            </Container>
        </>
    );
};

export default Home;
