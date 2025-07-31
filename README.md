# split-bill-app
A simple and intuitive React application for splitting bills with friends and tracking who owes money to whom. Perfect for managing shared expenses with roommates, friends, or colleagues.
🌟 Features

Friend Management: Add and manage your friends list with profile pictures
Bill Splitting: Split bills between you and any friend with automatic calculations
Balance Tracking: Keep track of who owes money to whom with visual indicators
Smart Calculations: Automatically calculate individual expenses based on total bill and payments
Flexible Payment Options: Choose who pays the bill and update balances accordingly
Clean UI: Simple, user-friendly interface with emoji icons and color-coded balances

🛠️ Technologies Used

React 18+ with Hooks (useState)
JavaScript ES6+
CSS3 for styling
Crypto API for unique ID generation
Pravatar for random profile pictures

🚀 Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository:

bashgit clone https://github.com/yourusername/split-bill-app.git
cd split-bill-app

Install dependencies:

bashnpm install
# or
yarn install

Start the development server:

bashnpm start
# or
yarn start

Open http://localhost:3000 to view it in your browser.

📱 How to Use
Adding Friends

Click the "Add friend" button
Enter your friend's name
Optionally customize their profile picture URL
Click "Add" to add them to your friends list

Splitting Bills

Select a friend from your friends list by clicking "Select"
Enter the total bill amount
Enter how much you paid
The app automatically calculates your friend's portion
Choose who is paying the bill (you or your friend)
Click "Split bill" to update balances

Understanding Balances

Green text: Your friend owes you money
Red text: You owe your friend money
Gray text: You're even with your friend

📁 Project Structure
src/
├── App.js              # Main application component
├── components/
│   ├── Button.js       # Reusable button component
│   ├── Friend.js       # Individual friend display
│   ├── FriendsList.js  # Friends list container
│   ├── FormAddFriend.js    # Add friend form
│   └── FormSplitBill.js    # Bill splitting form
├── index.js           # Application entry point
└── styles.css         # Global styles
🎯 Key Components

App: Main component managing application state and friend data
FriendsList: Renders the list of all friends
Friend: Individual friend component with balance display
FormAddFriend: Form for adding new friends
FormSplitBill: Form for splitting bills with calculations
Button: Reusable button component

💡 Features in Detail
Balance System
The app uses a simple balance system:

Positive balance: Friend owes you money
Negative balance: You owe the friend money
Zero balance: You're even

Bill Splitting Logic
When splitting a bill, the app calculates:

If you're paying: Friend's balance increases by their portion
If friend is paying: Your balance decreases by your portion

Data Persistence
Currently, data is stored in component state and resets on page refresh. Future versions could include:

Local storage persistence
Database integration
User accounts

🤝 Contributing
Contributions are welcome! Here are some ways you can contribute:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

Potential Enhancements

 Local storage for data persistence
 Edit/delete friends functionality
 Bill history tracking
 Multiple currency support
 Export functionality (PDF, CSV)
 Dark mode theme
 Mobile-responsive design improvements
 Group bill splitting (multiple friends)

🐛 Known Issues

Data doesn't persist after page refresh
No validation for negative bill amounts
Limited to two-person bill splits
