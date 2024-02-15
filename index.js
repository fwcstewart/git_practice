var quotes = [
'A rose by any other name would smell as sweet.',
'All that glitters is not gold',
'Ask not what your country can do for you; ask what you can do for your country.',
'Ask, and it shall be given you; seek, and you shall find.',
'Eighty percent of success is showing up.',
'Elementary, my dear Watson.',
'For those to whom much is given, much is required.',
'Genius is one percent inspiration and ninety-nine percent perspiration.',
'Go ahead, make my day.',
'He travels the fastest who travels alone.',
'Hell has no fury like a woman scorned.',
'Hell is other people.',
'Heres looking at you, kid.',
'Houston, we have a problem.',
'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
'I have always depended on the kindness of strangers.',
'I love the smell of napalm in the morning.',
'I think therefore I am.',
'If you are going through hell, keep going.',
'If you build it, they will come.',
'If you want something done right, do it yourself.',
'If you want something said, ask a man; if you want something done, ask a woman.',
'Keep your friends close, but your enemies closer.',
'Knowledge is power.',
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}