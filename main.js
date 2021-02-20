function addList(L) {
    let s = 0;
    for(let i=0; i<L.length; i++) {
        s = s + L[i];
    }
    return s;
}
console.log(addList([1, 2, 3]));