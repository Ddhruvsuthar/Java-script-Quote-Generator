
 var quotes = [
    'Life is what happens to us while we are making other plans.― Allen Saunders' , 
    'Life isn\'t about finding yourself. Life is about creating yourself.― George Bernard Shaw', 
    'Doubt kills more dreams than failure ever will. - Suzy Kassem',
    'Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman',
    'Whether you think you can or think you can\'t, you\'re right.-  Henry Ford',
    'Your talent determines what you can do. Your motivation determines how much you\'re willing to do. Your attitude determines how well you do it. —Lou Holtz',
    'The happiness of your life depends on the quality of your thoughts. - Marcus Aurelius' ,
    'Nothing is impossible. The word itself says I\'m possible! — Audrey Hepburn'
]




function newquote(){

    randomnumber = (Math.floor(Math.random () * quotes.length));
    document.getElementById('Quote display').innerHTML = quotes[randomnumber];
}