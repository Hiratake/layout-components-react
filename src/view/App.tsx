// App

import {
  LBox,
  LCenter,
  LCluster,
  LCover,
  LFrame,
  LGrid,
  LProvider,
  LReel,
  LSidebar,
  LStack,
  LSwitcher,
} from '../main'

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
                Layout
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                CSS
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                Web Design
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                Code
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
                Front-end
              </LBox>
              <LBox borderColor="#333" borderWidth="1px" padding="4px">
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
                  <LStack space="16px">
                    <LFrame>
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
                    <LFrame>
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
                    <LFrame>
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
                    <LFrame>
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
                    <LFrame>
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
                    <LFrame>
                      <img
                        src="https://user-images.githubusercontent.com/23224932/159028328-6212b278-8aa0-4d6e-9ae9-848fd2c7d973.jpg"
                        alt=""
                      />
                    </LFrame>
                    <h3>Grid6</h3>
                    <p>Super Hyper Extreme Ultra Strongest Sample Text.</p>
                  </LStack>
                </LBox>
              </LReel>
            </LStack>
          </LSidebar>
        </LStack>
      </LCenter>
    </LProvider>
  )
}
