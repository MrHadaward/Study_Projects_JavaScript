function randomNumber(range){
    return Math.floor(Math.random() * (range + 1));
}

function mod(num, mod){
    return (num % mod + mod) % mod;
}

let options = ['Rock', 'Paper', 'Scissors'];
let keep = Number(prompt('Wanna play ? 0-No 1-Yes : '))

while (keep){

    let userChoice = Number(prompt('0-Rock | 1-Paper | 2-Scissors : '));
    let computerChoice = randomNumber(2);

    if (mod(userChoice - 1, 3) == computerChoice){
        alert(`You Won ! ${options[userChoice]} beats ${options[computerChoice]}`)
    }

    else if (userChoice == computerChoice){
        alert(`Draw, ${options[userChoice]} tie with ${options[computerChoice]}`)
    }

    else{
        alert(`You Lost ! ${options[userChoice]} lose for ${options[computerChoice]}`)
    }

    keep = Number(prompt('Wanna play ? 0-No 1-Yes : '))
}
