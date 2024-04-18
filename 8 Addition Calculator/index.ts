import inquirer from "inquirer"

let answer = await inquirer.prompt(
    [
        {
            name : "firstnumber",
            message : "enter first number",
         },
         {  name : "sacondnumber",
            message : "enter second number",

         },
         {
           type : "list",
           name : "oprators",
           message : "select addition",
           choises : ["addition"]

         }

        
    ]
)
if (answer.oprators == "addition"){
    console.log(answer.firstnumber + answer.sacondnumber);
    
}