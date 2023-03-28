import React, { useEffect } from 'react'

const RocketLauncher = (props) => {
  let counter = 10;

  useEffect(() => {
    const countdown = () => console.log(counter -= 1)
    console.log('Rocket launcher mounted')
    let interval = setInterval(countdown, 1000)

    return () => {
      console.log('Rocket launcher unmounted')
      clearInterval(interval)
    }
  })

  return (
    <p>Rocket launcher is counting down for: {counter} seconds</p>
  )
}

export default RocketLauncher
