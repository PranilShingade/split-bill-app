import React from "react";

/**
 * Reusable Button component
 *
 * This is a simple wrapper around the HTML button element that provides
 * consistent styling and behavior throughout the application.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to display inside the button (text, icons, etc.)
 * @param {Function} props.onClick - Function to call when the button is clicked
 * @returns {JSX.Element} A styled button element
 */
export default function Button({children, onClick}) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}