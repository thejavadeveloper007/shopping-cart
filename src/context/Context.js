import React, { createContext, useState } from 'react'

export const Content = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);
  return <Content.Provider value={{cart, setCart}}>{children}</Content.Provider>
}

export default Context;