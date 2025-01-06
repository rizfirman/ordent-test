const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;

  for (let direction of walk) {
    switch (direction) {
      case 'n':
        y += 1;
        break;
      case 's':
        y -= 1;
        break;
      case 'e':
        x += 1;
        break;
      case 'w':
        x -= 1;
        break;
      default:
        return false;
    }
  }

  return x === 0 && y === 0;
};
console.log('test 1', isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log('test 2', isValidWalk(['n', 'n', 'n', 's', 's', 'w', 'e', 'e', 'w'])); // false
