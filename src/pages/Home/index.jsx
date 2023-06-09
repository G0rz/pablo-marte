import {Grid} from "@mui/material";
import Header from './Header'
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import {useThemeDetector} from "../../components/tools/tools";

const Home = () => {

    const isDarkTheme = useThemeDetector();

    return (<>
        <Header/>
        <AboutMe/>
        <Footer/>
    </>);
};

export default Home;
