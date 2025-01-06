const combineStrings = (str1, str2, str3) => {
  if (str1.length !== str2.length || str2.length !== str3.length) {
    throw new Error('Semua string harus memiliki panjang yang sama!');
  }

  let result = '';
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i] + str3[i];
  }

  return result;
};

try {
  console.log(combineStrings('aaa', 'bbb', 'ccc'));
  console.log(combineStrings('xyz', 'uv', 'rs')); // Error
} catch (error) {
  console.error(error.message);
}
