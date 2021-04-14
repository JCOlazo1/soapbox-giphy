import React, { useState } from 'react'

// Create the Component visibility toggle:
const VisibilityToggle = (component, visibility = true) => {
  const [visible, setVisibility] = useState(() => visibility);
  return [
    visible ? component : null,
    () => setVisibility((canSee) => !canSee)
  ];
}

export default VisibilityToggle
