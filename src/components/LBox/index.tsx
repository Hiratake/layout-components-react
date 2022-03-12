// LBox

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutBoxProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines the padding around component. */
  padding?: CSSProperties['padding']
  /** Color used for text. */
  color?: CSSProperties['color']
  /** Color used for the background. */
  backgroundColor?: CSSProperties['backgroundColor']
  /** Color used for the border. */
  borderColor?: CSSProperties['borderColor']
  /** Defines the width of the border. */
  borderWidth?: CSSProperties['borderWidth']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LBox = (props: LayoutBoxProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutBoxProps) => {
  return css`
    padding: ${props.padding};
    color: ${props.color};
    background-color: ${props.backgroundColor};
    border-color: ${props.borderColor};
    border-style: solid;
    border-width: ${props.borderWidth || 0};
    outline: solid 0.125rem transparent;
    outline-offset: -0.125rem;
  `
}
