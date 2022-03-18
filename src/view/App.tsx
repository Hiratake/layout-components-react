// App

import {
  LBox,
  LCenter,
  LCluster,
  LCover,
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
              {(() => {
                const boxes = []
                for (let i = 1; i <= 10; i++) {
                  boxes.push(
                    <LBox
                      key={`nav${i}`}
                      borderColor="#333"
                      borderWidth="1px"
                      padding="4px"
                    >
                      Item{i}
                    </LBox>
                  )
                }
                return <>{boxes}</>
              })()}
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
              {(() => {
                const items = []
                for (let i = 1; i <= 3; i++) {
                  const children = []
                  for (let j = 1; j <= 5; j++) {
                    children.push(<li key={`menu${i}item${j}`}>Item{j}</li>)
                  }
                  items.push(
                    <LStack key={`menu${i}`} space="8px">
                      <h2>SideMenu{i}</h2>
                      <ul>{children}</ul>
                    </LStack>
                  )
                }
                return items
              })()}
            </LStack>

            <LStack space="40px">
              <LSwitcher threshold="640px" space="24px" limit={3}>
                <LBox backgroundColor="#ddd" padding="16px">
                  Content1
                </LBox>
                <LBox backgroundColor="#ddd" padding="16px">
                  Content2
                </LBox>
                <LBox backgroundColor="#ddd" padding="16px">
                  Content3
                </LBox>
              </LSwitcher>
            </LStack>
          </LSidebar>
        </LStack>
      </LCenter>
    </LProvider>
  )
}
