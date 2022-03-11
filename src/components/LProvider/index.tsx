// LProvider

import { ReactNode } from 'react'
import { css, Global } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutProviderProps = {
  /** Children */
  children?: ReactNode
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LProvider = (props: LayoutProviderProps) => {
  return (
    <>
      <Global styles={rootStyle()} />
      {props.children}
    </>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = () => {
  return css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  `
}
