// App

import {
  LBox,
  LCenter,
  LCluster,
  LCover,
  LGrid,
  LProvider,
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
                    <h3>Grid1</h3>
                    <p>Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <h3>Grid2</h3>
                    <p>Super Hyper Extreme Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <h3>Grid3</h3>
                    <p>Super Hyper Extreme Ultra Strongest Best Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <h3>Grid4</h3>
                    <p>Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <h3>Grid5</h3>
                    <p>Super Hyper Sample Text.</p>
                  </LStack>
                </LBox>
                <LBox borderColor="#333" borderWidth="1px" padding="16px">
                  <LStack space="16px">
                    <h3>Grid6</h3>
                    <p>Super Hyper Extreme Ultra Strongest Sample Text.</p>
                  </LStack>
                </LBox>
              </LGrid>
            </LStack>
          </LSidebar>
        </LStack>
      </LCenter>
    </LProvider>
  )
}
