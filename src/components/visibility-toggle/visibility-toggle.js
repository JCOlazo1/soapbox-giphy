import { useState } from 'react'

// Create the Component visibility toggle:
const VisibilityToggle = (component, visibility = false) => {
  const [visiblity, setVisibility] = useState(() => visibility);
  return [
    visiblity ? component : null,
    () => setVisibility((canSee) => !canSee)
  ];
}

export default VisibilityToggle

// Testing for VisibilityToggle could be done if I restructure my code..
// The testing will now have to be done in 'App.js'
