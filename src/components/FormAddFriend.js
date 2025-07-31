import React, {useState} from "react";
import Button from "./Button";

/**
 * Form component for adding new friends to the application
 *
 * This component provides a form with two input fields:
 * - Friend's name (required)
 * - Image URL (optional, defaults to a random avatar)
 *
 * @param {Object} props - Component props
 * @param {Function} props.onAddFriend - Callback function to handle adding the new friend
 * @returns {JSX.Element} A form for adding new friends
 */
export default function FormAddFriend({onAddFriend}) {
  // State to store the friend's name input
  const [name, setName] = useState("");

  // State to store the image URL input, with a default placeholder
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * Handles form submission when adding a new friend
   *
   * @param {Event} e - The form submission event
   */
  function handleSubmit(e) {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Validate that both name and image are provided
    if (!name || !image) return;

    // Generate a unique ID for the new friend using Web Crypto API
    const id = crypto.randomUUID();

    // Create the new friend object
    const newFriend = {
      id,
      name,
      // Add the unique ID as a query parameter to ensure unique avatar images
      image: `${image}?=${id}`,
      balance: 0, // New friends start with zero balance
    };

    // Call the parent component's function to add the friend
    onAddFriend(newFriend);

    // Reset the form fields to their initial values
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Friend name input field */}
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Image URL input field */}
      <label>🌆 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Submit button - clicking this will trigger handleSubmit */}
      <Button>Add</Button>
    </form>
  );
}