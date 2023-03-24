import {BsMessenger} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {FaWhatsappSquare} from 'react-icons/fa';
const ContactApi = [
    {
        id: 1,
        icon:<MdEmail />,
        name: " Email ",
        username: " waleedabbasi840@gmail.com ",
        link:"mailto:waleedabbasi840@gmail.com",
    },
    {
        id: 2,
        icon: <BsMessenger /> ,
        name: " Messanger ",
        username: " muhammad waleed abbasi ",
        link:" https://web.facebook.com/muhammadwaleed.abbasi.35 ",
    },
    {

        id: 3,
        icon:<FaWhatsappSquare />,
        name: " Whatsapp ",
        username: "03170542307 ",
        link:"https://api.whatsapp.com/send?phone=03170542307",
    },
]
export default ContactApi;