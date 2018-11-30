
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray) {

    // Everything is working competely fine besides the fact that the ! is printing on  
    // 1st instance which it says it does not in the example.
    // However if you are using the remainder function then index 0 has no remainder therefore it will print.
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
       if (i % 3 === 0){
            buildMeUp += `${theWordArray[i]} ! `;
             console.log (buildMeUp);
       }
        else{
            buildMeUp += `${theWordArray[i]}`;
            console.log (buildMeUp);

        }
    
}
     /*
            If the current value of `i` divided by 3 has no
            remainder, add an exclamation point to the end of
            the word and then concatenate it to `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console
}
addExcitement(sentence);

