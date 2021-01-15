/*
in this we need to rotate the array elements and the function should accept two arguments number of rotation and the array elemnts and the function name should be array
sample  input and ouput 1
sample input array (4, [1,2,3,4])
sample output [4,3,2,1]

sample input and output2
sample input array(2,[1,2,3,4,5]);
sample output [3,4,5,1,2]
 */
function array(arr, rotations){
    let rotatedarray = arr.concat();
    for(i=0; i<rotations; i++){
        let frontItems = rotatedarray.shift();
        rotatedarray.push(frontItems);
    }
    return rotatedarray;
}
document.getElementById('root').innerHTML=array([1,2,3,4,5], 0);
