var btn=document.querySelector("button");
var quote = document.querySelector(".quote");
var person = document.querySelector(".person");

const quotes =[{
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall."
    ,
    person:"Nelson Mandela"
}
,
{
    quote:"The way to get started is to quit talking and begin doing. "
,
    person:"Walt Disney"
}
,
{
    quote:"Your time is limited, so don't waste it living someone else's life."
    ,
    person:"Steve Jobs"
}
,
{
    quote:"The future belongs to those who believe in the beauty of their dreams."
    ,
    person:"Eleanor Roosevelt"
}
,
{
    quote:"You must be the change you wish to see in the world."
    ,
    person:"Mahatma Gandhi"
}
];
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})