const n = 9;

function table(n, i = 1) {
    if (i >= 11) return;
    console.log(n * i);
    table(n, i + 1);
}

const answer = table(n);
console.log(answer);