/* 
Trie is an efficient information reTrieval data structure. 
Using Trie, search complexities can be brought to optimal limit (key length). 
If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N, 
where M is maximum string length and N is number of keys in tree. 
Using Trie, we can search the key in O(M) time. However the penalty is on Trie storage requirements.

Attributes:
- Trie is an efficient information reTrieval data structure.
- Trie is a tree data structure.
- Trie is also known as Prefix Tree.
- Trie is used to search strings.
- Trie is used to search strings in a dictionary.
- Trie is used to search strings in a dictionary in O(n) time complexity.
- Trie is used to search strings in a dictionary in O(n) time complexity, where n is the key length.
- Trie is used to search strings in a dictionary in O(n) time complexity, 
   where n is the key length of the string.
- Trie is used to search strings in a dictionary in O(n) time complexity, 
   where n is the key length of the string and not the number of keys.

Where to use:
- When you need to search strings.
- When you need to search strings in a dictionary.
- When you need to search strings in a dictionary in O(n) time complexity.
- When you need to search strings in a dictionary in O(n) time complexity, 
   where n is the key length of the string.

Real life use cases:
- Spell Checker
- Auto-Complete
- IP Routing (Longest Prefix Matching)
- T9 Predictive Text
- Solving word games like Boggle
- Solving word games like Word With Friends

*/
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for a word in the Trie
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  // Check if there is any word in the Trie that starts with the given prefix
  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app")); // Output: true
