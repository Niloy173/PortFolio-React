import React from 'react'
import { BsDiscord, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    
    <div className="header_socials">
    
      <a title='LinkeDin' href="https://www.linkedin.com/in/niloy-saha-594558201/" rel='noreferrer'  target={"_blank"}>{<BsLinkedin />}</a>
      <a title='GitHub' href="https://github.com/Niloy173"  rel='noreferrer' target={"_blank"}>{<FaGithub />}</a>
      <a title='Discord' href="https://discord.com/channels/@me"  rel='noreferrer' target={"_blank"}>{<BsDiscord />}</a>

    </div>
  )
}

export default HeaderSocial;
