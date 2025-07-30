const songs = [
    ["You\'re the coffee that I need in the morning", "You\'re my sunshine in the rain when it\'s pouring", "Won\'t you give yourself to me?"],
    ["His palms are sweaty, knees weak, arms are heavy", "There\'s vomit on his sweater already, mom\'s spaghetti", "He\'s nervous, but on the surface, he looks calm and ready"],
    ["You float like a feather", "In a beautiful world", "I wish I was special"]];

//This variable will sort the songs to be ordered in a random way without repeating themselves.
const unorderedSongs = songs.sort(() => Math.random() - 0.5)

//This variable choses a random index of each song, giving us a different part of each song joined in an array and line breaked.
const frases = unorderedSongs.map(group => group[Math.floor(Math.random() * group.length)]).join('\n');
//We print them.
console.log(frases);