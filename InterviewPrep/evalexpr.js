function evaluateExpression(expr) {
    // Ensure the expression only contains digits and basic operators
    if (/[^0-9\+\-\*\/]/.test(expr)) {
        throw new Error("Invalid characters in the expression");
    }

    // Perform the evaluation using eval
    try {
        return Math.floor(eval(expr)); // Ensure integer-based operations
    } catch (error) {
        throw new Error("Invalid expression");
    }
}

const expr = "5+8/4/2";
const result = evaluateExpression(expr);
console.log("Result:", result); // Output should be 17
