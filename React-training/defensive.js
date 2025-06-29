


if (condition1 && condition 2){
    var condition1= typeof(word) == 'string' && word.length >= 2;
    var condition2=typeof(match) == 'string' && match.length >= 1;
    console.log('both condition are true');
}
else {
    console.log('Please pass correct arguments to the function');


function letterFinder(word, match) {
    for(i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}