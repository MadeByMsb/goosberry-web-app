import React, { createContext, useState } from 'react'

export const essentialContext = createContext();
export function EssentialProvider({children}) {
    const [cardIndex,setCardIndex] = useState(4);
  return (
    <essentialContext.Provider value={[cardIndex,setCardIndex]}>
        {children}
    </essentialContext.Provider>
  )
}

