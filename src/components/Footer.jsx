import React from 'react'

import inst from '../images/inst.svg'
import fb from '../images/fb.svg'
import twit from '../images/twit.svg'
import yt from '../images/yt.svg'

function Footer() {
  return (
    <footer>
      <div className="footer__socials">
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'className='footer__socials--img'>
                <img src={inst} alt="inst" />
          </a>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'className='footer__socials--img'>
                <img src={fb} alt="inst" />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'className='footer__socials--img'>
                <img src={twit} alt="inst" />
          </a>
          <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'className='footer__socials--img'>
                <img src={yt} alt="inst" />
          </a>
      </div>
      <div className="footer__buttons">
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'className='footer__buttons--btn'>
              Conditions of Use
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'className='footer__buttons--btn'>
            Privacy & Policy
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'className='footer__buttons--btn'>
              Press Room
          </a>
      </div>
      <div className="footer__credits">
          <small>© 2021 MovieBox by Adriana Eka Prayudha  </small>
      </div>
    </footer>
  )
}

export default Footer