import React from 'react'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    
    <div className="header_socials">
    
      <a title='LinkeDin' href="https://www.google.com" rel='noreferrer'  target={"_blank"}>{<BsLinkedin />}</a>
      <a title='GitHub' href="https://www.google.com"  rel='noreferrer' target={"_blank"}>{<FaGithub />}</a>
      <a title='Discord' href="https://www.google.com"  rel='noreferrer' target={"_blank"}>{<BsDiscord />}</a>

    </div>
  )
}

export default HeaderSocial;
