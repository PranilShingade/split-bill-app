import React, {useState} from "react";
import Button from "./Button";

/**
 * Form component for splitting bills between the user and a selected friend
 *
 * This component handles:
 * - Input for total bill amount
 * - Input for how much the user paid
 * - Automatic calculation of how much the friend paid
 * - Selection of who is paying the bill (affects balance calculation)
 *
 * @param {Object} props - Component props
 * @param {Object} props.selectedFriend - The friend to split the bill with
 * @param {string|number} props.selectedFriend.id - Friend's unique identifier
 * @param {string} props.selectedFriend.name - Friend's name
 * @param {Function} props.onSplitBill - Callback function to process the bill split
 * @returns {JSX.Element} A form for splitting bills
 */
export default function FormSplitBill({selectedFriend, onSplitBill}) {
  // State to store the total bill amount
  const [bill, setBill] = useState("");

  // State to store how much the user paid
  const [paidByUser, setPaidByUser] = useState("");

  // Calculate how much the friend paid (derived state, not stored in useState)
  // If there's no bill amount, show empty string, otherwise subtract user's payment from total
  const paidByFriend = bill ? bill - paidByUser : "";

  // State to track who is paying the bill ("user" or "friend")
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  /**
   * Handles form submission when splitting a bill
   *
   * @param {Event} e - The form submission event
   */
  function handleSubmit(e) {
    // Prevent default form submission behavior
    e.preventDefault();

    // Validate that both bill amount and user payment are provided
    if (!bill || !paidByUser) return;

    // Calculate the balance adjustment based on who is paying:
    // - If user is paying: friend owes user the amount friend consumed (paidByFriend)
    // - If friend is paying: user owes friend the amount user consumed (-paidByUser)
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      {/* Form header showing which friend we're splitting with */}
      <h2>Split a bill with {selectedFriend.name}</h2>

      {/* Total bill amount input */}
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      {/* User's expense input */}
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            // Prevent user from entering more than the total bill
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      {/* Friend's expense - calculated automatically and disabled for editing */}
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}/>

      {/* Dropdown to select who is paying the bill */}
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      {/* Submit button to process the bill split */}
      <Button>Split bill</Button>
    </form>
  );
}