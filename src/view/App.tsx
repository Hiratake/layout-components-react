// App

import { LBox, LCenter, LCluster, LProvider, LStack } from '../main'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <LProvider>
      <LCenter max="1200px" gutters="24px">
        <LStack space="32px">
          <LCluster justify="space-between" align="center" space="16px">
            <LBox>LOGO</LBox>
            <LCluster space="8px">
              {(() => {
                const boxes = []
                for (let i = 1; i <= 10; i++) {
                  boxes.push(
                    <LBox borderColor="#333" borderWidth="1px" padding="4px">
                      Item{i}
                    </LBox>
                  )
                }
                return <>{boxes}</>
              })()}
            </LCluster>
          </LCluster>
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
        </LStack>
      </LCenter>
    </LProvider>
  )
}
