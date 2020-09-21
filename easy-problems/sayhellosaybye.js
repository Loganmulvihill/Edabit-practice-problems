function sayHelloBye(name, num) {
  let newName = name.charAt(0).toUpperCase() + name.slice(1)
  if (num === 1) {

    return `Hello ${newName}`;
  } else {
    return `Bye ${newName}`;
  }
}
