// In JS .length is O(1) operation - because it's a property of the array, not a methods

// Find 1st & nth tweets of a user
const tweets = [
  { id: 1, tweet: "Hello World", date: 2012 },
  { id: 2, tweet: "Hello World 2", date: 2014 },
  { id: 3, tweet: "Hello World 3", date: 2018 },
]; // O(n^2)

// Find 1st tweet
tweets[0]; // Find 1st tweet - O(1) - Constant Time
tweets[tweets.length - 1]; // Find nth tweet - O(1) - Constant Time
