//1 Последовательность ([{}]) является правильной, а последовательности ([)], {()] правильными не являются. Докажите это используя стек!

function isSequenceCorrect(sequence) {
    const stack = [];
  
    for (let i = 0; i < sequence.length; i++) {
      const bracket = sequence[i];
  
      if (bracket === '(' || bracket === '[' || bracket === '{') {
        stack.push(bracket);
      } else {
        if (stack.length === 0) {
          return false;
        }
        
        const top = stack[stack.length - 1];
  
        if (
          (bracket === ')' && top === '(') ||
          (bracket === ']' && top === '[') ||
          (bracket === '}' && top === '{')
        ) {
          stack.pop(); 
        } else {
          return false; 
        }
      }
    }

    return stack.length === 0;
  }

console.log(isSequenceCorrect('([{}])')); // true
console.log(isSequenceCorrect('([)]'));   // false
console.log(isSequenceCorrect('{()]'));   // false

//2 Дан односвязный список. Написать функцию или блок схему, определяющую, образуют ли его элементы симметричную последовательность. 
// Для решения задачи использовать стек и очередь. Функция будет возвращать значение true, если список является симметричным, false – 
// в противном случае. По определению пустой список является симметричным. Поэтому, если список пуст, то возвращаем значение true. 
// Для проверки симметричности списка нужно проверить на равенство все пары элементов, равноотстоящих от середины списка. 
// Каждая пара содержит один элемент из первой половины списка и один – из второй. Элементы первой половины списка последовательно
// заносятся в очередь, второй половины в стек. Если количество элементов списка будет нечетным, то серединный элемент будет симметричен 
// сам себе и не будет помещен ни в очередь, ни в стек.

function palidromeStack(string) {
    let firstString = [];
    let secondString = [];
    let firstStuck = string.length/2;;
    let secondStuak = string.length/2;
    if(string.length % 2 !== 0) {
        secondStuak = Math.ceil(secondStuak) - 1;
        firstStuck = Math.ceil(firstStuck) - 1;
    } else {
        secondStuak = string.length/2
        firstStuck = string.length/2
    }
    
    for(let i = 0; i < string.length/2; i++) {
        firstString.push(string[i]);
        secondString.push(string[secondStuak]);
        secondStuak++;
    }

    for(let j = 0; j < string.length/2; j++) {
        if(firstString[firstStuck] === secondString[j]) {
            firstStuck--;
        } else {
            return false
        }
    }

    return console.log(true)
}

palidromeStack('1234321');