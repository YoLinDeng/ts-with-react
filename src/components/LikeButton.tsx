import React, { useEffect, useState, useRef } from 'react'
// import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
  // const [likeObj, setLikeObj] = useState({ like: 0, on: true })
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  // const positions = useMousePosition()
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    document.title = `点了了${like}次`
    console.log('running is' + on)
  }, [like, on])
  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  }, [like])

  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    } 
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on' + likeRef.current)
    }, 3000)
  }
  return (
    // <div className="wrapper">
    //   <button onClick={() => setLikeObj({ like: likeObj.like + 1, on: likeObj.on })}>
    //     {likeObj.like}👍
    //   </button>
    //   <button onClick={() => setLikeObj({ like: likeObj.like, on: !likeObj.on })}>
    //     {likeObj.on ? 'ON' : 'OFF'}
    //   </button>
    // </div>
    <div className="wrapper">
      <input type="text" ref={domRef} />
      <button onClick={() => {setLike(like + 1); likeRef.current++ }}>
        {like}👍
      </button>
      <button onClick={ handleAlertClick }>
        Alert
      </button>
      <button onClick={() => setOn(!on)}>
        {on ? 'ON': 'OFF'}
      </button>
      {/* <p>X: {positions.x}, Y: {positions.y}</p> */}
    </div>
  )
}
export default LikeButton