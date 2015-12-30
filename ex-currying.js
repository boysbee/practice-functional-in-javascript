// var dragon = (name, size, element) =>
//   name + ' is a ' +
//   size + ' dragon that breathes ' +
//   element + '!'

// console.log(dragon('Karo','tiny','lightning'))

var dragon = 
  name =>
    size =>
      element =>
        name + ' is a ' +
        size + ' dragon that breathes ' +
        element + '!'

// var karoDragon = dragon('Karo')
// var largeDragon = karoDragon('large')
// console.log(largeDragon('lightning'))

var output = dragon('Karo')('large')('ice')

console.log(output)



