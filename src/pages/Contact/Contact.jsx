import {Helmet} from "react-helmet";
import {Image} from 'mui-image';
import ContactImage from '../../assets/images/Contact.webp'
const Contact = () => {


    return (
        <>
            <Helmet>
                <title>Pablo Marte - Contact</title>
            </Helmet>
            <Image
                src={ContactImage}
                height="100%"
                width="100%"
                fit="cover"
                duration={
                    3000
                }
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                showLoading={false}
                errorIcon={true}
                shift="null"
                distance="100px"
                shiftDuration={
                    900
                }
                bgColor="inherit"
            />
        </>
    );
};

export default Contact;