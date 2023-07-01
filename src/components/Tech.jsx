import { SectionWrapper } from '../hoc'
import { technologies } from "../constants"

import './style.css';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <img className='tech-img' src={technology.icon} key={technology.name} alt="" />
        
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")