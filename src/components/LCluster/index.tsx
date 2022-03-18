// LCluster

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutClusterProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines the horizontal placement. */
  justify?: CSSProperties['justifyContent']
  /** Defines the vertical alignment. */
  align?: CSSProperties['alignItems']
  /** Defines minimum space between children. */
  space?: CSSProperties['gap']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCluster = (props: LayoutClusterProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutClusterProps) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};
    align-items: ${props.align || 'flex-start'};
    justify-content: ${props.justify || 'flex-start'};
  `
}
