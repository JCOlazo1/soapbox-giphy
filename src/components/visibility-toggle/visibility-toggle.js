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
