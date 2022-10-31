import React from 'react';
import './Navbar.scss';
import {images} from "../../constants";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";


const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);
    return (
        <nav className={'app__navbar'}>
            <div className="app__navbar-logo">
                <img src={'https://upload.wikimedia.org/wikipedia/commons/8/86/Sidhu_Moosewala_signature.svg'} alt={'logo'}/>
            </div>
            <ul className={'app__navbar-links'}>
                {['Home', 'About', 'Contact', 'Work', 'Skills'].map((item, index) =>
                    <li key={`link-${item}`} className={'app__flex p-text'}>
                    <div> </div>
                    <a href={`#${item}`}>{item}</a>
                    </li>
                )}
            </ul>

            <div className={'app__navbar-menu'}>
                <HiMenuAlt4 onClick={(() => setToggle(true))}/>
                {toggle &&
                    <motion.div
                        whileInView={{ x : [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={(() => setToggle(false))}/>
                        <ul>
                        {['Home', 'About', 'Contact', 'Work', 'Skills'].map((item) =>
                            (<li key={item}>
                                <a href={`#${item}`}>{item}</a>
                            </li>)
                        )}
                        </ul>

                    </motion.div>
                }

            </div>
        </nav>
    );
};

export default Navbar;