import React from "react";
import Button from "./Button";

/**
 * Individual Friend component that displays friend information and balance
 *
 * This component shows:
 * - Friend's profile image and name
 * - Current balance status (who owes whom and how much)
 * - A select/close button for bill splitting
 *
 * @param {Object} props - Component props
 * @param {Object} props.friend - The friend object to display
 * @param {string|number} props.friend.id - Friend's unique identifier
 * @param {string} props.friend.name - Friend's name
 * @param {string} props.friend.image - URL to friend's profile image
 * @param {number} props.friend.balance - Current balance (-=you owe, +=they owe, 0=even)
 * @param {Function} props.onSelection - Callback function when friend is selected/deselected
 * @param {Object|null} props.selectedFriend - Currently selected friend (null if none)
 * @returns {JSX.Element} A list item representing a friend
 */
export default function Friend({friend, onSelection, selectedFriend}) {
  // Check if this friend is currently selected by comparing IDs
  // Uses optional chaining (?.) to safely access selectedFriend.id
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={`friend ${isSelected ? "selected" : ""}`}>
      {/* Friend's profile image */}
      <img src={friend.image} alt={friend.name}/>

      {/* Friend's name */}
      <h3>{friend.name}</h3>

      {/* Balance status - shows different messages based on balance value */}

      {/* Negative balance: You owe the friend money */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {/* Positive balance: The friend owes you money */}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}

      {/* Zero balance: You're even */}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* Select/Close button - text changes based on selection status */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}