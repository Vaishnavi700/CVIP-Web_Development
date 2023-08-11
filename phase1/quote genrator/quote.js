const quotes=[{
    quote: ' "Do the best you can until you know better. Then when you know better, do better." ',
    writer: '-Maya Angelou'
},{
    quote: ' "I am who I am today because of the choices I made yesterday." ',
    writer: ' -Eleanor Roosevelt'
},{
    quote: ' "Whatever we believe about ourselves and our ability comes true for us." ',
    writer: '-Susan L. Taylor'
},{
    quote: ' "Obstacles can\'t stop you. Problems can\'t stop you. Most of all, other people can\'t stop you. Only you can stop you." ',
    writer: '-Jeffrey Gitomer'
},{
    quote: ' "Many of life\'s failures are people who did not realize how close they were to success when they gave up" ',
    writer: '-Thomas A. Edison'
},{
    quote: ' "Life is ours to be spent, not to be saved" ',
    writer: '-D. H. Lawrence'
},{
    quote: ' "The only impossible journey is the one you never begin." ',
    writer: '-Tony Robbins'
},{
    quote: ' "Holding onto your anger is like drinking poison and expecting the other person to die" ',
    writer: '-Buddha'
},{
    quote: ' "Anyone who has never made a mistake has never tried anything new." ',
    writer: '-Albert Einstein'
},{
    quote: ' "Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are" ',
    writer: '-John Wooden'
},{
    quote: ' "It\’s not that I\’m so smart. It\’s just that I stay with problems longer" ',
    writer: '-Albert Einstein'
},]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML =quotes[random].writer;
}
)