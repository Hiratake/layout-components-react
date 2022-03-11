// LStack

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutStackProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines the space between children. */
  space?: CSSProperties['marginBlockStart']
  /** Whether the spaces apply recursively. */
  recursive?: boolean
  /** The element after which to split the stack with an auto margin. */
  splitAfter?: number
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LStack = (props: LayoutStackProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutStackProps) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & ${props.recursive ? '' : '>'} * + * {
      margin-block-start: ${props.space};
    }

    ${props.splitAfter && splitAfterStyle(props.splitAfter)}
  `
}

const splitAfterStyle = (
  splitAfter: Required<LayoutStackProps>['splitAfter']
) => {
  return css`
    &:only-child {
      block-size: 100%;
    }

    & > *:nth-of-type(${splitAfter}) {
      margin-block-end: auto;
    }
  `
}
