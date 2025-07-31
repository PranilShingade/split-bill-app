import React from "react";
import Friend from "./Friend";

/**
 * FriendsList component that renders a list of all friends
 *
 * This component takes an array of friends and renders each one
 * using the Friend component. It passes down the necessary props
 * for friend selection and displaying the current selected state.
 *
 * @param {Object} props - Component props
 * @param {Array} props.friends - Array of friend objects to display
 * @param {Function} props.onSelection - Callback function for when a friend is selected
 * @param {Object|null} props.selectedFriend - Currently selected friend object (null if none)
 * @returns {JSX.Element} An unordered list containing Friend components
 */
export default function FriendsList({friends, onSelection, selectedFriend}) {
  return (
    <ul>
      {/* Map over the friends array to create a Friend component for each friend */}
      {friends.map((friend) => (
        <Friend
          key={friend.id} // Unique key for React's reconciliation process
          friend={friend} // Pass the friend object
          onSelection={onSelection} // Pass the selection handler
          selectedFriend={selectedFriend} // Pass the currently selected friend
        />
      ))}
    </ul>
  );
}