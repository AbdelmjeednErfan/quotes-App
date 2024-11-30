

var array = [
    { maxim:'“Be yourself; everyone else is already taken.”', speaker: 'Oscar Wilde'},
    { maxim:' “So many books, so little time.”', speaker: 'Frank Zappa'},
    { maxim:' “A room without books is like a body without a soul.”', speaker: "Marcus Tullius Cicero"},
    { maxim:'“You only live once, but if you do it right, once is enough.”', speaker: 'Mae West'},
    { maxim:'“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ', speaker: 'Bill Keane'},

];

function writecode() {
    const random = Math.floor(Math.random() * array.length + 1);
    document.getElementById('quote-1').innerHTML = `${array[random].maxim}`;
    document.getElementById('quote-2').innerHTML = array[random].speaker;
}