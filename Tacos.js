const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}


const tacos = [taco, taco1, taco2]


// write a function that takes a tacoOBJ and a id
// and returns a new object with name changed to "changed"

console.log('--return a new tacoObj with the name as changed--')
const changedName = (tacoObj, id) => {
  let newTaco = {...tacoObj, name:"changed", id:id}
  console.log(newTaco)
}
changedName(taco1, 4);

// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)

console.log('--return tacoObj as a formatted html--')
const tacoObjHTML = (tacoObj) => {
	const {id, name, price, about} = tacoObj
		return (			
				`<h1>I.D:${id}. Name:${name}. Price:${price}. About:${about}</h1>`
		)
}
console.log(tacoObjHTML(taco));

// write a function that takes an tacoOBJ and return formatted price with
// .00 

console.log('--return cents for the taco price--')
const tacoCents = (tacoObj) => {
	return '$' + tacoObj.price + '.00'
}
console.log(tacoCents(taco2));

// create a new array where all of the prices is formatted with .00

console.log('--return cents for ALL taco prices--')
const tacoCentsAll = () => {
  let priceAll = tacos.map(
    (newArray)=>{
      return {...newArray, price: ('$' + newArray.price.toFixed(2))}
    }
  )
  return priceAll
}
let priceAll = tacoCentsAll()
console.log(priceAll);

// write a function that takes an array and logs each item in the array
// hint forEach

console.log('--Log each item in an Array--')
const logAll = (tacoObj) => {
  console.log(tacoObj)
}
tacos.forEach(logAll);

// use the find method to return the object with id:1

console.log('--Return Object with ID of 1--')
let tacoObj = tacos.find(x => x.id === 1)
console.log(tacoObj);

// return a new array with all prices greater than 19

console.log('--return a new array with all prices above $19--')
const logAllPrice = (tacoObj) => {
  if (tacoObj.price > 19)
	return console.log(tacoObj)
	else console.log()
}
tacos.forEach(logAllPrice)

// return a new array with a 'about' key where it is a combo of
// name price and about


// DID not get to.  stuck on $19 array and about key.

///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
