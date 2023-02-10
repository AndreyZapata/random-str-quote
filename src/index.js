  const quotes = [  
    "Genius is manifested in originality, not regularity.",  
    "Death is a mystery we can never comprehend.",  
    "Imagination is more important than knowledge.",  
    "Madness is the only way to truly know reality.",  
    "There is something terribly wrong with laughter.",  
    "Mystery is the key to all arts.",  
    "Beauty will be eternal, while ugliness is only temporary.",  
    "Nothing is more hopeless than uncertainty.",  
    "Truth is stranger than fiction.",  
    "Pain is eternal, but death is just a moment.",  
    "Madness is a state of mind where one cannot distinguish between reality and fantasy.",  
    "Death is a portal to the mystery of life.",  
    "Life is a dream, death is an awakening.",  
    "Poetry is the mirror of the human soul.",  
    "Life is a play without a script."
];
  
  const meaninglessQuoteCommit = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(`\x1b[34m${quote}\x1b[89m`);
  }
  
  module.exports = {
    meaninglessQuoteCommit
  };