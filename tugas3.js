function dividerSort(num){
    console.log("Input:" + num);

    if(typeof num !== "number"){
        console.log("Data harus berupa number");
    } else if(num === 0){
        console.log("Jangan inputkan angka nol saja!");
    } else if(num.toString().length < 2 ){
        console.log("Panjang deret angka harus lebih dari dua");
    } 
     else {
        let angka = num.toString()
                       .split('0')
                       .map(item => item.split('').sort().join(''))
                       .join('')
        console.log("Output:" + angka);  
    }  
}
console.log("No.1");
dividerSort("senin")
console.log("\n");

console.log("No.2");
dividerSort(0)
console.log("\n");

console.log("No.3");
dividerSort(2)
console.log("\n");

console.log("No.4");
dividerSort(74108520159)