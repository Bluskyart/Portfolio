import './footer.css';
import linkedinIcon from '../assets/png/icons/linkedin.png';
import GithubIcon from '../assets/png/icons/github.png';
import EmailIcon from '../assets/png/icons/mail.png';
import CV from '../assets/png/icons/CV.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer_haut">
                <h4>RESEAUX</h4>
                <div className='footer_social'>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/guerwan-lescrohart-7b6b75112/'><img className='footer_icons' src={linkedinIcon} alt='linkedin'></img></a>
                    <a target='_blank' rel="noreferrer" href='https://github.com/Bluskyart'><img className='footer_icons' src={GithubIcon} alt='Github'></img></a>
                    <a target='_blank' rel="noreferrer" href='mailto:glescrohart@gmail.com'><img className='footer_icons' src={EmailIcon} alt='Email'></img></a>
                    <a target='_blank' rel="noreferrer" href='https://raw.githubusercontent.com/Bluskyart/Curriculum/master/CV_Guerwan_LESCROHART.pdf'><img className='footer_icons' src={CV} alt='CV'></img></a>
                </div>
            </div>
            <div className="footer_bas">
                <p>© Copyright 2025 - Guerwan LESCROHART</p>
            </div>
            
        </footer>
    )
}

export default Footer