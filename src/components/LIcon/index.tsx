// LIcon

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutIconProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Defines the space between text and the icon. */
  space?: CSSProperties['marginInlineEnd']
  /** Turns the element into an image in assistive technologies and adds an aria-label of the value. */
  label?: string
  /** Defines the size of the icon. */
  size?: CSSProperties['fontSize']
  /** Defines the color of the icon. */
  color?: CSSProperties['color']
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LIcon = (props: LayoutIconProps) => {
  const ComponentTag = props.tag || 'span'
  return (
    <ComponentTag
      role={props.label && 'img'}
      aria-label={props.label}
      css={rootStyle(props)}
    >
      {props.children}
    </ComponentTag>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutIconProps) => {
  return css`
    font-size: ${props.size || '0.75em'};
    color: ${props.color || 'currentcolor'};

    & > svg {
      width: ${props.size || '0.75em'};
      height: ${props.size || '0.75em'};
      fill: currentcolor;
    }

    ${props.space && withIconStyle(props.space)}
  `
}

const withIconStyle = (space: Required<LayoutIconProps>['space']) => {
  return css`
    display: inline-flex;
    align-items: baseline;

    & > svg {
      margin-inline-end: ${space};
    }
  `
}
