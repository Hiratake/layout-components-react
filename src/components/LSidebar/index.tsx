// LSidebar

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutSidebarProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Which element to treat as the sidebar. */
  side?: 'left' | 'right'
  /** Represents the width of the sidebar when adjacent. */
  sideWidth?: CSSProperties['flexBasis']
  /** Defines minimum width of the content element. */
  contentMin?: CSSProperties['minInlineSize']
  /** Defines the space between children. */
  space?: CSSProperties['gap']
  /** Make the adjacent elements adopt their natural height. */
  noStretch?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LSidebar = (props: LayoutSidebarProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutSidebarProps) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};
    align-items: ${props.noStretch ? 'flex-start' : 'stretch'};

    & > * {
      flex-basis: ${props.sideWidth};
      flex-grow: 1;
    }

    & > ${props.side === 'left' ? ':last-child' : ':first-child'} {
      flex-basis: 0;
      flex-grow: 999;
      min-inline-size: ${props.contentMin || '50%'};
    }
  `
}
