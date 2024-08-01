'use client'
import React from 'react'
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <div>
      <Typewriter
                options={{
                  strings: [
                    "Hello",
                    "Namaste",
                    "Hola",
                    "Bonjour",
                    "Hallo",
                    "Nǐ hǎo",
                    "Olá",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
    </div>
  )
}

export default TypewriterEffect
