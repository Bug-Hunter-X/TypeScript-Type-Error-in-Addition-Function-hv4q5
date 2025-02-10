# TypeScript Type Error in Addition Function

This repository demonstrates a common type error in TypeScript that arises when performing arithmetic operations with mismatched data types.  The `add` function is defined to accept two numbers, but the code calls it with a number and a string, resulting in a type error.

## Bug

The bug lies in the incorrect function call: `add(5, '10')`.  The function signature expects two numbers, but a string is provided as the second argument. TypeScript's type system correctly identifies this as an error, preventing compilation.

## Solution

The solution involves ensuring both arguments passed to the `add` function are numbers. This can be achieved through explicit type conversion or by changing the function to handle different data types.