// LStack

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
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
  const [splitAfter, setSplitAfter] = useState<number>(0)
  const [splitAfterTag, setSplitAfterTag] = useState<string>('')
  const stackRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (props.children && props.splitAfter && stackRef.current) {
      const children = Array.from(stackRef.current.children)
        .filter((element) => element.tagName.toLocaleLowerCase() !== 'style')
        .slice(0, props.splitAfter)
        .map((element) => element.tagName.toLocaleLowerCase())
      setSplitAfterTag(children[children.length - 1])
      setSplitAfter(children.filter((item) => item === splitAfterTag).length)
    }
  })
  return (
    <ComponentTag
      ref={stackRef}
      css={[rootStyle(props), splitAfterStyle(splitAfter, splitAfterTag)]}
    >
      {props.children}
    </ComponentTag>
  )
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
  `
}

const splitAfterStyle = (splitAfter: number, tagName: string) => {
  if (splitAfter && tagName) {
    return css`
      &:only-child {
        block-size: 100%;
      }

      & > ${tagName}:nth-of-type(${splitAfter}) {
        margin-block-end: auto;
      }
    `
  }
}
