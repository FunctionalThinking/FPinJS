// ES6: let, const bindings
"use strict";

// let
for (let i = 0; i < 10; i++) {
    console.log(i);
}

cosole.log(i); // error, i is not defined

// const
const PI = 3.141593;
PI = 1.0; // error, const

// let, const
function f() {
    "use strict";
    {
        let x;
        {
            // block scopred name
            const x = "sneaky";
            // error, const
            x = "foo";
        }
        // error, already declared in block
        let x = "inner";
    }
}

