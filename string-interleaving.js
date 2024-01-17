const a = "bcc";
const b = "bbca";
const c = "bbcbcac";

function isInterleaving(a, b, c) {

    //Get the length of a and b
    let M = a.length;
    let N = b.length;

    //If c is not the same length as a + b, then it's not
    if (M + N !== c.length) {
        return false;
    };

    //Make the matrix that will hold the values for each comparison
    const Mat = new Array(M + 1);
    for (let i = 0; i <= M; i++) {
        Mat[i] = new Array(N + 1);
    };

    //Zero characters of a and b interleave with c
    Mat[0][0] = true;

    //This is the first column in the matrix
    //if b is empty, then see if a and c are the same
    for (i = 1; i <= M; i++) {
        // console.log(i);
        // console.log("a[i] is ", a[i]);
        // console.log("a[i-1] is ", a[i - 1], " and c[i-1] is ", c[i - 1]);
        // console.log(Mat);
        if (a[i - 1] !== c[i - 1]) {
            Mat[i][0] = 0;
        }
        else {
            Mat[i][0] = Mat[i - 1][0];
        };
    };

    //This is the row column in the matrix
    //if a is empty, then see if b and c are the same
    for (j = 1; j <= N; j++) {
        // console.log(j);
        // console.log("b[j] is ", b[j]);
        // console.log("b[j-1] is ", b[j - 1], " and c[j-1] is ", c[j - 1]);
        // console.log(Mat);
        if (b[j - 1] !== c[j - 1]) {
            Mat[0][j] = 0;
        }
        else {
            Mat[0][j] = Mat[0][j - 1];
        };
    };

    // console.log(Mat);

    //Now the actual logic for all the other cells
    for (i = 1; i <= M; i++) {
        for (j = 1; j <= N; j++) {
            // console.log("i is ", i, "and j is ", j);
            // console.log("i is ", i);
            // console.log("j is ", j);
            // console.log("a[i - 1] is ", a[i - 1]);
            // console.log("c[i - 1] is ", c[i - 1]);
            // console.log("b[j - 1] is ", b[j - 1]);
            // console.log("c[j - 1] is ", c[j - 1]);
            // console.log("i + j - 1 is ", i + j - 1);
            // console.log("c[i + j - 1] is ", c[i + j - 1]);

            //This is where my error was pay attention
            //See if the current char for a or b matches the current char for c
            console.log("Right now, we are comparing if the (", i - 1, ")th character from ", a, ", which is ", a[i - 1], ", is a match to the (", i + j - 1, ",)th character from ", c, ", which is ", c[i + j - 1], " or if the (", j - 1, ")th character from ", b, ", which is ", b[j - 1], " is a match to the (", i + j - 1, ")th character from ", c, ", which is ", c[i + j - 1]);
            if (a[i - 1] == c[i + j - 1] &&
                b[j - 1] !== c[i + j - 1]) {
                Mat[i][j] = Mat[i - 1][j]; //or could just say = true, right?
                // console.log("Mat[", i, "][", j, "] is ", Mat[i][j]);
                console.log("match");
            }
            else {
                if (a[i - 1] !== c[i + j - 1] &&
                    b[j - 1] == c[i + j - 1]) {
                    // console.log("b and c match, a does not");
                    Mat[i][j] = Mat[i][j - 1]; //or could just say = true, right?
                    // console.log("Mat[", i, "][", j, "] is ", Mat[i][j]);
                    console.log("match");
                }
                else {
                    if (a[i - 1] == c[i + j - 1] &&
                        b[j - 1] == c[i + j - 1]) {
                        // console.log("both are a match");
                        Mat[i][j] = (Mat[i - 1][j] || Mat[i][j - 1]);
                        // console.log("Mat[", i, "][", j, "] is ", Mat[i][j]);
                        console.log("match");
                    }
                    else {
                        Mat[i][j] = 0;
                        // console.log("This happens if there is no match");
                        // console.log("Mat[", i, "][", j, "] is ", Mat[i][j]);
                        console.log("no match");
                    }

                }

            }
        }
    }

    console.log(Mat);
    return Mat[M][N];


};

const answer = isInterleaving(a, b, c);
console.log(answer);