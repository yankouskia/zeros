# zeros
Let's count zeros!

## Task

Your task is to implement `getZerosCount` function, which takes any integer number `number` (`1 <= number <= 10^8`) as only argument. You should calculate *how many zeros in the end of result number, which is factorial of `number`*

For example:
```js
    const zerosCount = getZerosCount(10); // Factorial of 10 is 3628800
    console.log(zerosCount); // 2. Because there is 2 *tail* zeros in number 3628800
```

### Important!
Do not try to calculate factorial! First - you will not get exact answer on big numbers. Second - it could take several years to calculate factorial on big integers! Try to think up your awesome solution without such calculations. Good luck!
