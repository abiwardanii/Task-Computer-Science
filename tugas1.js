function palindrome(str){
    console.log("input:" + str);
    if(typeof str !== "string"){
        console.log("Inputkan tipe data string");
    } else {
        let x = str.toLowerCase();
        let y = x.split('').reverse().join(''); 
        console.log("Output:" + y);
        if(y === x){
            console.log("Palindrom");
        } else {
            console.log("Bukan Palindrom");
        }
        
    }
    
}
console.log("No.1");
palindrome("kasur rusak");
console.log("\n");

console.log("No.2");
palindrome("bootcamp");
console.log("\n");

console.log("No.3");
palindrome(619)