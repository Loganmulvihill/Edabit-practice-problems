function helloWorld(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Hello World"
  }
  if (num % 3 === 0) {
    return "Hello"
  } else if (num % 5 === 0) {
    return "World"
  }
}
