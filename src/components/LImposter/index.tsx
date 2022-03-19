// LImposter

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutImposterProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Whether the element is allowed to break out of the container over which it is positioned. */
  breakout?: boolean
  /** Defines the margin around component. */
  margin?: CSSProperties['maxInlineSize'] | CSSProperties['maxBlockSize']
  /** Whether to position the element relative to the viewport. */
  fixed?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LImposter = (props: LayoutImposterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutImposterProps) => {
  return css`
    position: ${props.fixed ? 'fixed' : 'absolute'};
    inset-block-start: 50%;
    inset-inline-start: 50%;
    transform: translate(-50%, -50%);

    ${!props.breakout && noBreakoutStyle(props.margin)}
  `
}

const noBreakoutStyle = (margin: LayoutImposterProps['margin']) => {
  return css`
    max-inline-size: calc(100% - (${margin || 0} * 2));
    max-block-size: calc(100% - (${margin || 0} * 2));
    overflow: auto;
  `
}
