# Test
## Test
### Test
#### Test

Rerum `dolor aspernatur` iusto dicta voluptatum.

```javascript
export function arrayUnique(array) {
  return Array.from(new Set(array));
}

export function isTesting() {
  return (
    navigator.userAgent,
    navigator.userAgent.includes("Node.js") ||
      navigator.userAgent.includes("jsdom")
  );
}

export function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2");
}

function findAges(data, age1, age2) {
  const result = [];
  let nearestAge = null;

  for (let i = 0; i < data.length; i++) {
    const currentAge = data[i].age;

    if (currentAge < age1) {
      if (nearestAge === null || currentAge > nearestAge)
        // запоминаем, если тек. больше ближ.
        nearestAge = currentAge;

      continue;
    }

    if (currentAge > age2) break;

    result.push(currentAge);
  }

  return result;
}

const data = [{ age: 10 }, { age: 15 }, { age: 16 }, { age: 20 }, { age: 21 }];

console.log(findAges(data, 11, 13));

export default data;
```

_Directives_ are commands you send to the assembler to do things like locating code in memory. They start with . and are indented. This sample directive tells the assembler to put the code starting at memory location $8000, which is inside the game ROM area. **Labels** are aligned to the far left and have a : at the end. The label is just something you use to organize your code and make it easier to read. The assembler translates the label into an address.


