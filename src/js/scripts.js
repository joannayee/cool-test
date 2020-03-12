import { Parallex, Darkmode, EventGroup } from 'giftbag'

//All giftbag follow this pattern
//1. create
//2. setup
//3. initalize

//Create new parallex
const parallex = new Parallex();
console.log(Parallex)

//setup
const parallexElements = document.querySelectorAll('.parallax-element')

parallex.setup({
    selector: parallexElements
})

parallex.init

const scroll = new scroll();

const scrollElements = document.querySelectorAll('.scroll-elements');

scroll.setup({
    selector: scrollElements
})

scroll.init()