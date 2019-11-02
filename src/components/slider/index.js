import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Arrow from './arrow'
import './_slider.scss'

const useSlides = () => {
  const [width] = useWindowSize();
  let perpage = 1
  if (width > 450) {
    perpage = 2
    if (width > 768) {
      perpage = 3
      if (width > 1024) {
        perpage = 4
      }
    }
  }
  return [width / perpage, perpage]
}

const Slider = ({ children, className, ...props }) => {
  const lastIdx = children.length - 1
  const [width, perpage] = useSlides();
  const [index, setIndex] = React.useState(0)

  
  const correctedIndex = idx => {
    if (idx < 0) return 0
    if ((idx + perpage) > lastIdx) return lastIdx + 1 - perpage
    return idx
  }
  if (index !== correctedIndex(index)) {
    setIndex(correctedIndex(index))
  }

  const handleMove = n => setIndex(prevIdx => prevIdx + (n * perpage))
  const translate = (index * (width - (32 / perpage)))
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <div
          className={`slider${className ? ` ${className}` : ''}`}
          style={{ transform: `translateX(-${translate}px)` }}
          {...props}
        >
          {children}
        </div>
      </div>
      <div className="slider__controls">
        <button className="slider__button" onClick={() => handleMove(-1)} disabled={index === 0}>
          <Arrow className="reverse" />
        </button>
        <button className="slider__button" onClick={() => handleMove(1)} disabled={index + perpage > lastIdx}>
          <Arrow />
        </button>
      </div>
    </>
  )
}

export default Slider