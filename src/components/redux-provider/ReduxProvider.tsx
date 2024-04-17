"use client"

import { store } from '@/redux/store'
import { FC } from 'react'
import { Provider } from 'react-redux'

const ReduxProvider: FC<Readonly<{children: React.ReactNode;}>> = ({children}) => {
  return (
    <Provider store={store}>
        {children}    
    </Provider>
  )
}

export default ReduxProvider