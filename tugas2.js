function strReverse(str){
    console.log('Input:' + str);
    if(typeof str !== "string"){
        console.log("Inputkan data string");
    } else {
        let balikKata = str.split(' ').reverse().join(' ');
        console.log(balikKata);
    }  
}
console.log("No.1");
strReverse("Aku suka belajar bahasa pemgrograman javascript");
console.log("\n");

console.log("No.2");
strReverse(619);