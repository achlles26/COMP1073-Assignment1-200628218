const buttons = document.querySelector("p");
const text = document.querySelector("h3");
const buttons2 = document.querySelector("h4");

let button1 = document.createElement("button");
button1.textContent = "Click me";
button1.style.backgroundColor =  "purple";
buttons.appendChild(button1);

let button2 = document.createElement("button");
button2.textContent = "Click me";
button2.style.backgroundColor =  "blue";
buttons.appendChild(button2);

let button3 = document.createElement("button");
button3.textContent = "Click me";
button3.style.backgroundColor =  "green";
buttons.appendChild(button3);

let button4 = document.createElement("button");
button4.textContent = "Click me";
button4.style.backgroundColor =  "orange";
buttons.appendChild(button4);

let button5 = document.createElement("button");
button5.textContent = "Click me";
button5.style.backgroundColor =  "pink";
buttons.appendChild(button5);

let button6 = document.createElement("button");
button6.textContent = "Click me";
button6.style.backgroundColor = "red";
buttons2.appendChild(button6);

let button7 = document.createElement("button");
button7.textContent = "Click me";
button7.style.backgroundColor = "teal";
buttons2.appendChild(button7);


let nouns1 =  ["The turkey", "Mom", "Dad", "The dog", "my teacher", "The elephant", "The cat"];
let verbs1 = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectives1 = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let nouns3 = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;

button1.onclick = function function1() {
    
    console.log(nouns1[count1]);
    text.textContent += nouns1[count1] + " ";
    count1++;

    if (count1 == 7){

        count1=0;
    }
}

button2.onclick = function function2() {
    
    console.log(verbs1[count2]);
    text.textContent += verbs1[count2] + " ";
    count2++;

    if (count2 == 6){

        count2=0;
    }
}

button3.onclick = function function3() {
    
    console.log(adjectives1[count3]);
    text.textContent += adjectives1[count3] + " ";
    count3++;

    if (count3 == 6){

        count3=0;
    }
}

button4.onclick = function function4() {
    
    console.log(nouns2[count4]);
    text.textContent += nouns2[count4] + " ";
    count4++;

    if (count4 == 7){

        count4=0;
    }
}

button5.onclick = function function5() {
    
    console.log(nouns3[count5]);
    text.textContent += nouns3[count5] + " ";
    count5++;

    if (count5 == 6){

        count5=0;
    }
}

button6.onclick = function function6() {


    let index1 = Math.floor(Math.random() * 7);
    text.textContent += nouns1[index1] + " ";

    let index2 = Math.floor(Math.random() * 6);
    text.textContent += verbs1[index2] + " ";

    let index3 = Math.floor(Math.random() * 6);
    text.textContent += adjectives1[index3] + " ";

    let index4 = Math.floor(Math.random() * 7);
    text.textContent += nouns2[index4] + " ";

    let index5 = Math.floor(Math.random() * 6);
    text.textContent += nouns3[index5] + " ";
}

button7.onclick = function function7() {

    text.textContent += text.textContent;
}