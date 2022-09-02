//spread

const intro=["Testing","rest","and","spread"]
const copyarr=[...intro]
console.log(copyarr)
console.log(...copyarr)
// eg:1
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [5, 8, 8];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(0,numbers))

// eg:2
const cars=["mercedes","bmw","ferrari","audi"]
const copyarr1=[...cars]
console.log(...copyarr1)
// e.g1
function sum(...theArgs) {
    let total = 0;
    for (const i of theArgs) {
      total += i;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  
  // rest
const getsize=(...args)=>{
    return args.length
}
console.log(getsize(5,9,3,5,14,5,554))
console.log(getsize(2,7,5,6,3,44,65,151,48984,7))