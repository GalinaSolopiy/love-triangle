/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    preferences.forEach(function (love, i, preferences) {
        var A = love;
        var B = preferences[love-1];
        var C = preferences[B-1];
        if ((C == (i+1))&&((A!==B)&&(B!==C))){
            count++;
            preferences[A-1]=-1;
            preferences[B-1]=-1;
            preferences[C-1]=-1;

        }
    });
    return count;
};