import {Grid} from "@mui/material";
import Header from './Header'
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Home = ({mode, setMode}) => {


    return (<>
        <Header mode={mode} setMode={setMode}/>
        <Grid item xs={12} textAlign={'center'}>
            <h1 style={{
                background: "-webkit-linear-gradient(45deg, #0a5ba6 30%, #3f9bf1 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>LEONARDO YAEL BAZAN BECERRIL</h1>
        </Grid>
        <AboutMe/>
        <Footer/>
    </>);
};

export default Home;
