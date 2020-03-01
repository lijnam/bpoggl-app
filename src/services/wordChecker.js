/**
 * Searches the characters around the  current character of the word
 * @param {Array} board 
 * @param {number} k 
 * @param {number} l 
 * @param {Array} used 
 * @param {String} word 
 * @param {number} current_char 
 * @returns {Boolean}
 */
async function search (board, k, l, used, word, current_char) {
    for (let i = k - 1; i <= k + 1; i++) {
        for (let j = l - 1; j <= l + 1; j++) {

            let _isInMatrix = isInMatrix(board, i, j);

            if (
                /* should be in matrix  */
                _isInMatrix

                /* char should not be used */
                && !isUsed(used, i, j)

                /* is current character */
                && board[i][j] === word[current_char]
            ) {
                current_char++;

                if (typeof word[current_char] === "undefined") {
                    return true;
                }
                used.push(i + '-' + j);
                let result = await search(board, i, j, [...used], word, current_char);

                if (result === false) {
                    /* remove from used list */
                    used = [...used.filter(arrayItem => arrayItem !== (i + '-' + j))];
                    /*  set current char to search to provious char */
                    current_char--;
                } else {
                    return result;
                }
            }
        }
    }

    return false;
}

/**
 * Checks if the word is used or not
 * @param {Array} used 
 * @param {number} i 
 * @param {number} j 
 * @returns {boolean}
 */
function isUsed (used, i, j) {
    return used.includes(i + '-' + j);
}

/**
 *  Checks if the character is in matrix or not
 * @param {Array} board 
 * @param {number} i 
 * @param {number} j 
 * @returns {Boolean}
 */
function isInMatrix (board, i, j) {
    let cols = board[0].length - 1;
    let rows = board.length - 1;

    if (i < 0 || j < 0) {
        // console.log(i + ',' + j + ' not in matrix')
        return false;
    }
    if (i > rows || j > cols) {
        // console.log(i + ',' + j + ' not in matrix')

        return false;
    }
    // console.log(board[i][j] + " is in matrix")
    return true;

}

/**
 * Checks each character in the board
 * When first character is matched, it calls search method to search around the character 
 * @param {Array} board 
 * @param {String} word 
 * @returns {Boolean}
 */
async function checkWord (board, word) {
    word = word.toUpperCase();
    for (let k = 0; k < board.length; k++) {
        for (let l = 0; l < board[0].length; l++) {
            let used = [];
            let current_char = 0;
            if (board[k][l] === word[0]) {
                used.push(k + '-' + l);
                current_char++;
                let result = await search(board, k, l, used, word, current_char);
                console.log('main: ' + result);
                if (result === true) {
                    return result;
                }
            }
        }
    }
    return false;

}

export default checkWord;