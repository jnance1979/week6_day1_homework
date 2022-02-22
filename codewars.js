
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function (l, w) {
    if (l === w) {
        return l * w;
    }
    else {
        return l * 2 + w * 2;
    }
};



// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let y = x.toLowerCase();
    let z =y.split("").reverse().join("");
    if (y === z) {
        return true
    }
    else {
        return false
    }
};


// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript

function numberToString(num) {
    let text = num.toString();
    return text
}


//https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript


const cannonsReady = (gunners) => {
    for (let k in gunners)
        if (gunners[k] === 'nay') {
            return 'Shiver me timbers!'
        }
        else {
            continue
        }
    return ('Fire!')
}