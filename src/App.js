import React, {useState} from "react";
import FriendsList from "./FriendsList";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";

// Initial data for friends list - each friend has an id, name, image URL, and balance
// Balance represents money owed: negative = you owe them, positive = they owe you, 0 = even
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7, // You owe Clark 7€
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20, // Sarah owes you 20€
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0, // You and Anthony are even
  },
];

/**
 * Main App component that manages the "Split Bill" application
 *
 * This component handles:
 * - Managing the list of friends
 * - Toggling the "Add Friend" form visibility
 * - Selecting/deselecting friends for bill splitting
 * - Processing bill splits and updating friend balances
 *
 * @returns {JSX.Element} The main application interface
 */
export default function App() {
  // State to store the array of friends
  const [friends, setFriends] = useState(initialFriends);

  // State to control whether the "Add Friend" form is visible
  const [showAddFriend, setShowAddFriend] = useState(false);

  // State to track which friend is currently selected for bill splitting
  // null means no friend is selected
  const [selectedFriend, setSelectedFriend] = useState(null);

  /**
   * Toggles the visibility of the "Add Friend" form
   * Uses functional update to flip the current boolean value
   */
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  /**
   * Adds a new friend to the friends list
   *
   * @param {Object} friend - The new friend object to add
   * @param {string|number} friend.id - Unique identifier for the friend
   * @param {string} friend.name - Friend's name
   * @param {string} friend.image - URL to friend's profile image
   * @param {number} friend.balance - Initial balance (usually 0)
   */
  function handleAddFriend(friend) {
    // Add the new friend to the existing friends array using spread operator
    setFriends((friends) => [...friends, friend]);
    // Hide the add friend form after adding
    setShowAddFriend(false);
  }

  /**
   * Handles friend selection for bill splitting
   *
   * @param {Object} friend - The friend object to select/deselect
   *
   * Logic: If the clicked friend is already selected, deselect them (set to null)
   * Otherwise, select the clicked friend
   */
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    // Close the add friend form when selecting a friend
    setShowAddFriend(false);
  }

  /**
   * Processes a bill split and updates the selected friend's balance
   *
   * @param {number} value - The amount to add/subtract from friend's balance
   *                        Positive = friend owes you, Negative = you owe friend
   */
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        // Only update the balance of the selected friend
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    // Clear the selection after splitting the bill
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      {/* Sidebar containing friends list and add friend functionality */}
      <div className="sidebar">
        {/* Display the list of friends with selection and balance info */}
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {/* Conditionally render the Add Friend form */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/* Button to toggle Add Friend form visibility */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {/* Conditionally render the Split Bill form when a friend is selected */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}