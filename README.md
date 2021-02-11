# shiny

Problem #1:

Write code to return the first 100 shiny numbers greater than n. A shiny number is a number where each base-10 digit (from left to right) is ≤ the next digit

· Shiny: 123, 499, 111, 0, 246888

· Not Shiny: 1231, 21, 63

Please document any assumptions.

# Solution
It seems like shiny numbers are just a sorted digits array in ascending order, so we can just
first sort the array and compare it with the original one, if they are the same, then
this number is shiny.

Assumption: The input will only be a valid integer