// LGrid

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutGridProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines the base width. */
  min?: CSSProperties['width']
  /** Defines the space between children. */
  space?: CSSProperties['gap']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LGrid = (props: LayoutGridProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutGridProps) => {
  const gridTemplateColumns = `repeat(
    auto-fill,
    minmax(min(${props.min || '240px'}, 100%), 1fr)
  )`
  return css`
    display: grid;
    grid-template-columns: ${gridTemplateColumns};
    gap: ${props.space};
    align-content: flex-start;
  `
}
