// LFrame

import { ElementType, ReactNode } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutFrameProps = {
  /** Custom tag used for the root element. */
  tag?: ElementType
  /** Content of the component. */
  children?: ReactNode
  /** Aspect ratio of the element. */
  ratio?: `${number}:${number}`
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LFrame = (props: LayoutFrameProps) => {
  const ComponentTag = props.tag || 'div'
  return <ComponentTag css={rootStyle(props)}>{props.children}</ComponentTag>
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutFrameProps) => {
  const ratio = (props.ratio || '16:9').split(':').join('/')
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: ${ratio};
    overflow: hidden;

    & > img,
    & > video {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  `
}
