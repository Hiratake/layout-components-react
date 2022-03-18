// LCover

import { CSSProperties, ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutCoverProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Header content of the component. */
  header?: ReactNode
  /** Footer content of the component. */
  footer?: ReactNode
  /** Defines minimum space between children and around all of child elements. */
  space?: CSSProperties['padding'] | CSSProperties['marginBlock']
  /** Minimum height of the component. */
  minHeight?: CSSProperties['minHeight']
  /** Whether the spacing is also applied as padding to the container element. */
  noPad?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LCover = (props: LayoutCoverProps) => {
  const ComponentTag = props.tag || 'div'
  const header = props.header && (
    <div css={headerStyle(props.space)}>{props.header}</div>
  )
  const footer = props.footer && (
    <div css={footerStyle(props.space)}>{props.footer}</div>
  )
  return (
    <ComponentTag css={rootStyle(props)}>
      {header}
      {props.children}
      {footer}
    </ComponentTag>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutCoverProps) => {
  return css`
    display: flex;
    flex-direction: column;
    min-height: ${props.minHeight || '100vh'};
    padding: ${props.noPad ? 0 : props.space};

    & > * {
      margin-block-start: auto;
      margin-block-end: auto;
    }
  `
}

const headerStyle = (space: LayoutCoverProps['space']) => {
  return css`
    margin-block-start: 0;
    margin-block-end: ${space || 0};
  `
}

const footerStyle = (space: LayoutCoverProps['space']) => {
  return css`
    margin-block-start: ${space || 0};
    margin-block-end: 0;
  `
}
