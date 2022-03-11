// App

import { LProvider, LStack } from '../main'

// ----------------------------------------
// JSX
// ----------------------------------------

export const App = () => {
  return (
    <LProvider>
      <LStack space="40px">
        <p>text1</p>
        <p>text2</p>
        <p>text3</p>
      </LStack>
    </LProvider>
  )
}
