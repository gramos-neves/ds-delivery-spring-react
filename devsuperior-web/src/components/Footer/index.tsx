import './styles.css';

import { ReactComponent as Youtubeimg } from  '../../asserts/youtube.svg'; 
import { ReactComponent as LinkedinImg } from  '../../asserts/linkedin.svg'; 
import { ReactComponent as InstagramImg } from  '../../asserts/Instagram.svg'; 


const Footer = () => {
   return (
          <footer className="main-footer">
              App desenvolvido durante a 2 ed. do evento semana devsuperior
             <div className="footer-icons">
                 <a href="#" target="_new">
                     <Youtubeimg />
                 </a>
                 <a href="#" target="_new">
                     <LinkedinImg />
                 </a>
                 <a href="#" target="_new">
                      <InstagramImg />
                  </a>
             </div>
          </footer>
    )
}


export default Footer