// Function to shuffle a deck of cards
function shuffleDeck() {
  // Define suits and card values
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  // Create an empty deck
  const deck = [];

  // Create a deck by combining suits and card values
  for (const suit of suits) {
    for (const value of cardValues) {
      deck.push(`${value} of ${suit}`);
    }
  }

  // Shuffle the deck
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Display the first five shuffled cards
  const output = document.getElementById("output");
  output.innerHTML = "The first five cards are:<br><br>";
  for (let i = 0; i < 5; i++) {
    output.innerHTML += deck[i] + "<br>";
  }
}