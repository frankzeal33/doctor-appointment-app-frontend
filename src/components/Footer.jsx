import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div className="container footer_container">
            <article>
                <Link to="/">
                    <div className="logo">
                        <div className="logo-image">
                            <img src={Logo} alt="" />
                        </div>
                        <h2><span>MEDI</span>CARE</h2>
                    </div>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem? Deserunt, excepturi? Adipisci fuga odit at aliquid velit saepe consequatur labore minima!
                </p>
                <div className="footer_socials">
                    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedinIn/></a>
                    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/find-a-doctor">Find a Doctor</Link>
                <Link to="/login">Login</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/blog">Blog</Link>
                <Link to="/">Case Studies</Link>
                <Link to="/">Events</Link>
                <Link to="/">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/">Contact Us</Link>
                <Link to="/">Support</Link>
            </article>
        </div>
        <div className="footer_copyright">
            <small>2023 <span>OJIEGO FRANKLIN</span> &copy; All Rights Reserved</small>
        </div>
    </footer>
  );
}

export default Footer;

