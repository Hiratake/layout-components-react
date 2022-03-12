// App

import { LBox, LProvider, LStack } from '../main'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <LProvider>
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
    </LProvider>
  )
}
