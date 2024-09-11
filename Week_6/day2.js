function arrConcat(){
    let arr1 = ["python", "javascript"];
    let arr2 = ["C#", "swift", "Kotlin"];
    let allarr = arr1.concat(arr2);
    console.log(allarr);
}
arrConcat();

function arrConcat2(){
    let arr1 = new Array("python", "javascript");
    let arr2 = new Array("C#", "swift", "Kotlin");
    let allarr = arr1.concat(arr2);
    console.log(allarr);
}
arrConcat2();

function arrJoin(){
    let arr = ["first", "second", "third"];
    let result = arr.join("+");
    console.log(typeof(result));
    console.log(result);
}
arrJoin();

function arrReverse(){
    let arr = ["first", "second", "third", "fourth"];
    console.log(arr);
    let poppeditem = arr.pop();
    console.log("popped item: ", poppeditem);
    console.log("after-pop: ");
    console.log(arr);
    arr.reverse();
    console.log("after-reverse: ");
    console.log(arr);
}
arrReverse();

function arrSort(){
    let arr = ["a", "c", "d", "b"];
    console.log(arr);
    arr.sort();
    console.log(arr);
}
arrSort();

function arrShift(){
    let arr = ["first", "second", "third", "fourth"];
    console.log(arr);
    let shifteditem = arr.shift();
    console.log(shifteditem);
    console.log(arr);
    let unshifteditem = "zeroth";
    console.log(unshifteditem);
    arr.unshift(unshifteditem);
    console.log(arr);
}
arrShift();

function arrIndexOf(){
    let arr = ["first", "second", "third", "fourth"];
    console.log(arr);
    let idx = arr.indexOf("third");
    console.log("arr.indexOf('third'): ", idx);
    arr.shift();
    console.log("arr is shifted");
    idx = arr.indexOf("third");
    console.log("arr.indexOf('third'): ", idx);

}
arrIndexOf();

function arrSlice(){
    // slice return a new copy
    // gives the removed items
    let fruits =["pear", "apple", "melon", "kiwi", "tomato"];
    console.log(fruits);
    let slicedarr = fruits.slice(1,3);
    console.log(slicedarr);
}
arrSlice();

function arrSplice(){
    // splice works on same arry
    // gives everything except the removed items
    let fruits =["pear", "apple", "melon", "kiwi", "tomato"];
    console.log(fruits);

    const startIdx = fruits.indexOf("melon");
    const numToRemove = 2;
    fruits.splice(startIdx, numToRemove);
    console.log(fruits);

}
arrSplice();