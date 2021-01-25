import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [positions, SetPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect' + positions.x)
    const updateMouse = (e: MouseEvent) => {
      SetPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect' + positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePosition