var arr = [71, 101, 127, 139, 187, 159, 16, 45, 88, 196, 8, 165, 12, 42, 19, 88, 112, 79, 64, 70, 197, 168, 54, 113, 122, 74, 149, 93, 121, 91, 94, 113, 2, 113, 4, 41, 89, 121, 198, 84, 128, 149, 200, 212, 80, 71, 62, 75, 193, 133, 186, 67, 40, 38, 103, 209, 93, 112, 202, 99, 216, 82, 127, 197, 25, 215, 78, 115, 152, 74, 204, 117, 186, 87, 201, 91, 66, 108, 93, 8, 187, 98, 136, 53, 116, 14, 33, 7, 131, 114, 121, 140, 54, 59, 35, 9, 6, 62, 192, 22, 157, 201, 21, 194, 5, 30, 127, 67, 215, 205, 40, 174, 186, 86, 144, 91, 54, 23, 86, 190, 214, 20, 95, 110, 166, 68, 198, 127, 144, 120, 122, 45, 21, 135, 194, 179, 211, 8, 35, 156, 13, 85, 198, 193, 1, 114, 12, 214, 138, 68, 39, 133, 184, 4, 102, 76, 203, 45, 97, 193, 103, 213, 87, 26, 22, 77, 151, 100, 83, 61, 173, 6, 11, 136, 1, 80, 46, 11, 47, 77, 199, 73, 10, 10, 3, 196, 105, 61, 50, 62, 24, 56, 129, 196, 66, 183, 133, 3, 178, 83, 69, 94, 101, 1, 124, 2, 39, 129, 192, 8, 50, 191, 114, 91, 153, 170];
console.log(arr[100]);
var count = 0;
arr.forEach(function (love, i, arr) {
    var A = love;
    var B = arr[love-1];
    var C = arr[B-1];
    console.log(i+"A="+(A)+" B="+B+" C="+C);
    if ((C == (i+1))&&((A!==B)&&(B!==C))){
        count++;
        //console.log(i);
        arr[A-1]=-1;
        //console.log(arr);
        arr[B-1]=-1;
        //console.log(arr);
        arr[C-1]=-1;
       // console.log(arr);

    }
});
console.log(count);