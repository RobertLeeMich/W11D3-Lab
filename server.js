//Fibonacci

const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000 //set the port from the env file, or set it to 3000

app.get("/", (req, res) => {
    res.send(`Type a number in the URL to check if it's a Fibonacci number`)
})

//FUNCTION TO DETERMINE IF THE INPUT NUMBER IS SQUARE
function isSquare(x){
    //USING Math.sqrt TO CHECK THE NUMBER INPUT (on researching this, this was interesting to find out that it existed)
    let s = parseInt(Math.sqrt(x));
    return (s * s == x);
}

//FUNCTION FOR CREATING THE FIBONACCI NUMBERS USING THE SQUARE FUNCTION
function fibbNum(num)  {
    //RETURNS isSquare 5 TIMES THE INPUT NUMBER, TIMES THE INPUT NUMBER, PLUS 4 OR MINUS 4 TO DETERMINE IF THE INPUT NUMBER IS SQUARE
    return isSquare(5 * num * num + 4) || isSquare(5 * num * num - 4);

    //EX: 5 * 0 * 1 + 4 = 5 WHICH IS A FIBONACCI NUMBER, SO 1 AND/OR 0 WOULD BE FIBONACCI.
}

//PATHING FOR THE PAGE AND USER INPUT INTO THE URL
app.get("/fib/:number", (req, res) => {
    //DECLARING VARIABLE TO ASSIGN THE req.params.number FROM THE URL TO A VARIABLE
    const num = req.params.number
    //CHECKING IF A NUMBER IS FIBONACCI USING THE fibbNum FUNCTION, WHICH TAKES THE NUM INPUT WHICH IS ASSIGNED THE req.params.number VALUE FROM THE URL
    const isFib = fibbNum(num)
    //PRINTS TO THE PAGE IF THE NUMBER IS FIBONACCI OR NOT
    if (isFib){
        res.send(`Very good. It is Fibonacci.`)
    } else {
        res.send(`I can tell this is not a Fibonacci number.`)
    }
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000")
})