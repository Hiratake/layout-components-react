// App

import {
  LBox,
  LCenter,
  LCluster,
  LCover,
  LFrame,
  LGrid,
  LIcon,
  LImposter,
  LProvider,
  LReel,
  LSidebar,
  LStack,
  LSwitcher,
} from '../main'
import { css } from '@emotion/react'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <LProvider>
      <LCover
        header={
          <LCluster
            tag="header"
            justify="space-between"
            align="center"
            space="16px"
          >
            <LBox>Layout Components</LBox>
            <LCluster tag="nav" space="8px">
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </LIcon>
                Layout
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z" />
                  </svg>
                </LIcon>
                CSS
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
                  </svg>
                </LIcon>
                Web Design
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </LIcon>
                Code
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z" />
                  </svg>
                </LIcon>
                Front-end
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                <LIcon space="8px" size="0.8em">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                  </svg>
                </LIcon>
                Development
              </LBox>
            </LCluster>
          </LCluster>
        }
        footer={
          <p>
            This library is based on{' '}
            <a href="https://every-layout.dev/">Every Layout</a>.
          </p>
        }
        space="40px"
      >
        <h1>Layout Primitive Components for React</h1>
      </LCover>

      <LCenter max="1200px" gutters="24px">
        <LStack space="32px">
          <LSidebar side="left" sideWidth="240px" space="24px">
            <LStack space="24px">
              <LStack space="8px">
                <h2>Sidebar1</h2>
                <ul>
                  <li>Item1</li>
                  <li>Item2</li>
                  <li>Item3</li>
                  <li>Item4</li>
                  <li>Item5</li>
                </ul>
              </LStack>
              <LStack space="8px">
                <h2>Sidebar2</h2>
                <ul>
                  <li>Item1</li>
                  <li>Item2</li>
                  <li>Item3</li>
                  <li>Item4</li>
                  <li>Item5</li>
                </ul>
              </LStack>
              <LStack space="8px">
                <h2>Sidebar3</h2>
                <ul>
                  <li>Item1</li>
                  <li>Item2</li>
                  <li>Item3</li>
                  <li>Item4</li>
                  <li>Item5</li>
                </ul>
              </LStack>
            </LStack>

            <LStack space="40px">
              <LSwitcher threshold="640px" space="24px" limit={3}>
                <LBox backgroundColor="#ddd" padding="16px">
                  Switcher1
                </LBox>
                <LBox backgroundColor="#ddd" padding="16px">
                  Switcher2
                </LBox>
                <LBox backgroundColor="#ddd" padding="16px">
                  Switcher3
                </LBox>
              </LSwitcher>

              <LGrid min="200px" space="24px">
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159027931-62f39bc9-4d4d-4288-b474-b84c7ad92cdd.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid1</h3>
                    <p>Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028063-5be96e59-5afa-48c6-9e47-4629a26a1dd1.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid2</h3>
                    <p>Super Hyper Extreme Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028204-01afb069-aaff-4498-bc6e-0c7582644809.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid3</h3>
                    <p>Super Hyper Extreme Ultra Strongest Best Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028244-b0b2dfe1-cba9-4617-8807-35e75148168a.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid4</h3>
                    <p>Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028280-f42f08f4-2c18-4517-bedc-9bcce168d5fc.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid5</h3>
                    <p>Super Hyper Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <LFrame ratio="4:3">
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028328-6212b278-8aa0-4d6e-9ae9-848fd2c7d973.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid6</h3>
                    <p>Super Hyper Extreme Ultra Strongest Sample Text.</p>
                  </LStack>
                </LBox>
              </LGrid>

              <LReel itemWidth="200px" space="24px">
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159027931-62f39bc9-4d4d-4288-b474-b84c7ad92cdd.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid1</h3>
                    <p>Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028063-5be96e59-5afa-48c6-9e47-4629a26a1dd1.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid2</h3>
                    <p>Super Hyper Extreme Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028204-01afb069-aaff-4498-bc6e-0c7582644809.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid3</h3>
                    <p>Super Hyper Extreme Ultra Strongest Best Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028244-b0b2dfe1-cba9-4617-8807-35e75148168a.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid4</h3>
                    <p>Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028280-f42f08f4-2c18-4517-bedc-9bcce168d5fc.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid5</h3>
                    <p>Super Hyper Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px" splitAfter={3}>
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028328-6212b278-8aa0-4d6e-9ae9-848fd2c7d973.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid6</h3>
                    <p>Super Hyper Extreme Ultra Strongest Sample Text.</p>
                    <small>from: Every Layout</small>
                  </LStack>
                </LBox>
              </LReel>

              <div css={relativeContainer()}>
                <LBox padding="40px" backgroundColor="#ddd">
                  <LImposter>
                    <LBox padding="16px" backgroundColor="#bbb">
                      Imposter
                    </LBox>
                  </LImposter>
                </LBox>
              </div>
            </LStack>
          </LSidebar>
        </LStack>
      </LCenter>
    </LProvider>
  )
}

// ----------------------------------------
// Style
// ----------------------------------------

const relativeContainer = () => {
  return css`
    position: relative;
  `
}
