// ====== Daily Challenge 1

let sentence = "The movie is not that bad, I like it"

let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(result);
} else {
    console.log(sentence);
}

// ====== Daily Challenge 2

for(let i = 0; i <= 6; i++){
    console.log("* ".repeat(i));
}

let n = 6
for(let i = 1; i <= n; i++){
    let line = ""
    for(let j = 1; j <= i; j++){
        line += "* "
    }
    console.log(line)
}

// ====== Daily Challenge 3

