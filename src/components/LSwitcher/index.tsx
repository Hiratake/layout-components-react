// LSwitcher

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutSwitcherProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines container breakpoint. */
  threshold?: CSSProperties['flexBasis']
  /** Defines the space between children. */
  space?: CSSProperties['gap']
  /** Defines the maximum number of items permitted for a horizontal layout. */
  limit?: number
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LSwitcher = (props: LayoutSwitcherProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutSwitcherProps) => {
  const flexBasis = props.threshold && `calc((${props.threshold} - 100%) * 999)`
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${props.space};

    & > * {
      flex-basis: ${flexBasis};
      flex-grow: 1;
    }

    ${props.limit && limitStyle(props.limit)}
  `
}

const limitStyle = (limit: Required<LayoutSwitcherProps>['limit']) => {
  return css`
    & > *:nth-last-of-type(n + ${limit + 1}),
    & > *:nth-last-of-type(n + ${limit + 1}) ~ * {
      flex-basis: 100%;
    }
  `
}
