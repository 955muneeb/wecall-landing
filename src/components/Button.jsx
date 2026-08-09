// src/components/Button.jsx
import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  // Variant options mapped to our CSS classes: primary, accent, outline, dark-outline
  return (
    <button className={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}