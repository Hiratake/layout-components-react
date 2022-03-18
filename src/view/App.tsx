// App

import { LBox, LCenter, LCluster, LProvider, LSidebar, LStack } from '../main'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <LProvider>
      <LCenter max="1200px" gutters="24px">
        <LStack space="32px">
          <LCluster
            tag="header"
            justify="space-between"
            align="center"
            space="16px"
          >
            <LBox>LOGO</LBox>
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
              <LBox backgroundColor="#ddd" padding="16px">
                Box01
              </LBox>
              <LBox backgroundColor="#ddd" padding="16px">
                Box02
              </LBox>
              <LBox backgroundColor="#ddd" padding="16px">
                Box03
              </LBox>
            </LStack>
          </LSidebar>
        </LStack>
      </LCenter>
    </LProvider>
  )
}
