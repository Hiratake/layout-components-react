// LCenter

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutCenterProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Maximum width of the component. */
  max?: CSSProperties['maxWidth']
  /** Defines minimum paddings at both ends. */
  gutters?: CSSProperties['paddingRight'] | CSSProperties['paddingLeft']
  /** Whether to center the child elements. */
  intrinsic?: boolean
  /** Whether to center the text. */
  andText?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCenter = (props: LayoutCenterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutCenterProps) => {
  return css`
    box-sizing: content-box;
    max-width: ${props.max || '60ch'};
    padding-right: ${props.gutters};
    padding-left: ${props.gutters};
    margin-right: auto;
    margin-left: auto;

    ${props.intrinsic && intrinsicStyle()}
    ${props.andText && andTextStyle()}
  `
}

const intrinsicStyle = () => {
  return css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
}

const andTextStyle = () => {
  return css`
    text-align: center;
  `
}
