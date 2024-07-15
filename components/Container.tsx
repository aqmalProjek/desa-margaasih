import React, { ReactChildren } from 'react'

export default function Container({className, children} : {className:String, children:React.ReactNode}) {
  return (
    <div className={`w-full  lg:w-[80%] md:w-[90%] mx-[auto] ${className}`}>
        {children}
    </div>
  )
}
