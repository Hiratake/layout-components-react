// LReel

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'

// ----------------------------------------
// Type
// ----------------------------------------

export type LayoutReelProps = {
  /** Content of the component. */
  children?: ReactNode
  /** Defines the width of child elements. */
  itemWidth?: CSSProperties['flexBasis']
  /** Defines the space between children. */
  space?: CSSProperties['marginInlineStart'] | CSSProperties['paddingBottom']
  /** Defines the height of the component. */
  height?: CSSProperties['height']
  /** Whether to display the scrollbar. */
  noBar?: boolean
}

// ----------------------------------------
// JSX
// ----------------------------------------

export const LReel = (props: LayoutReelProps) => {
  const [overflowing, setOverflowing] = useState<boolean>(false)
  const reelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updateOverflowing = (
      element: ResizeObserverEntry | MutationRecord
    ) => {
      const target = element.target as Element
      setOverflowing(!!(target.scrollWidth > target.clientWidth))
    }
    if ('ResizeObserver' in window) {
      reelRef.current &&
        new ResizeObserver((entries) => {
          updateOverflowing(entries[0])
        }).observe(reelRef.current)
    }
    if ('MutationObserver' in window) {
      reelRef.current &&
        new MutationObserver((entries) => {
          updateOverflowing(entries[0])
        }).observe(reelRef.current, { childList: true })
    }
  })
  return (
    <div
      ref={reelRef}
      css={[rootStyle(props), overflowingStyle(overflowing, props.space)]}
    >
      {props.children}
    </div>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const rootStyle = (props: LayoutReelProps) => {
  return css`
    display: flex;
    height: ${props.height};
    overflow-x: auto;
    overflow-y: hidden;

    & > * {
      flex: 0 0 ${props.itemWidth || 'auto'};
    }

    & > * + * {
      margin-inline-start: ${props.space};
    }

    & > img {
      height: 100%;
    }

    ${props.noBar && noBarStyle()}
  `
}

const noBarStyle = () => {
  return css`
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  `
}

const overflowingStyle = (
  overflowing: boolean,
  space?: LayoutReelProps['space']
) => {
  return css`
    padding-bottom: ${overflowing ? space : 0};
  `
}
