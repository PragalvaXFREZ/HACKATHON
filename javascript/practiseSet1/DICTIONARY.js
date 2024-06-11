dictionary=
{
    "happy":"feeling or showing pleasure or contentment.",
    "sad":"feeling or showing sorrow; unhappy.",
    "brace":"a device fitted to something, in particular a weak or injured part of the body, to give support.",
    "erect":"rigidly upright or straight.",
    "please":"cause to feel happy and satisfied."
};

function getMeaning(word) {
    if (dictionary[word]) {
        return dictionary[word];
    } else {
        return "Word not found in dictionary.";
    }
}
console.log(getMeaning("happy"));
console.log(getMeaning("lol"));