const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err,data) =>{
    if(err){
        console.error("Σφάλμα κατά την ανάγνωση του αρχείου", err);
        return;
    }

    console.log("Περιεχόμενο αρχείου:", data);
});








/*function greet(name){
    console.log(`Γειά σου, ${name}! Καλώς ήρθες στο Node.js!`);
}

greet("Γιώργο");
greet("Μαρία"); 


const name = process.argv[2];
console.log(`Γειά σου, ${name}!`);  */