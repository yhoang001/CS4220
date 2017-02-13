### Week 3 Homework - Due 02/19/17 at 11:59pm

Complete all the problems below.

- Use ES6 syntax. Make sure you are using let/const properly.  Absoultely NO use of var.

- Use proper indentation or formatting.


#### 1 Write a function that counts down from 5. Call this funciton only once. It should then the countdown from 5 to 1 and print each number to the console. (30 pts)
    countDown(5)
    // 5
    // 4
    // 3
    // 2
    // 1


#### 2 Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves.  If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument and uses your Promise function and is able to print the results. (35 pts)
-- If a letter is lowercase it should print: 'this letter was resolved: b'
-- If a letter was uppercase it should print: 'this letter was rejected: A'

*DO NOT write 26 'if' or 'switch' statements.
*Meaning NO ```if (letter === 'A' || letter === 'B' ... || letter === 'Z')```

        const letters = ['A', 'b', 'c', 'D', 'e']
        sortLetters(letters)
        // this letter was rejected: A
        // this letter was resolved: b



##### 3.  Write a series of functions that utilize callbacks to determine a word is a palidrome. Each function should call the next in the series. (35 pts)

-- print(): prints the answer to the console.
-- reverseWord(): reverses the word
-- compare(): compares the reversed word to the original

        print('kayak') // true
        print('canoe') // false


##### Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)

*Do not use setTimeout as a solution.  NO credit for setTimeout here.



