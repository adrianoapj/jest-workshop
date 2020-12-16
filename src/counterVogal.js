function counterVogal(word) {
  if (typeof(word) !== 'string') {
    throw new TypeError('Provide a string');
  }

  let vogals = 0;

  const convertedWord = word.toLowerCase();

  for (let i = 0; i < convertedWord.length; i++) {
    const char = convertedWord.charAt(i);

    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vogals++;
    }
  }

  return vogals;
}

module.exports = counterVogal;