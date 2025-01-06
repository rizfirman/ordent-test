const generateAcronym = (fullName) => {
  const tokens = fullName.trim().toLowerCase().split(/\s+/);

  const n = tokens.length;

  if (n === 1) {
    return tokens[0][0].toUpperCase();
  }

  let firstNameTokens = [];
  let lastNameTokens = [];

  switch (n) {
    case 2:
      firstNameTokens = [tokens[0]];
      lastNameTokens = [tokens[1]];
      break;

    case 3:
      if (tokens[1] === 'von') {
        firstNameTokens = [tokens[0]];
        lastNameTokens = [tokens[1], tokens[2]];
      } else {
        firstNameTokens = [tokens[0], tokens[1]];
        lastNameTokens = [tokens[2]];
      }
      break;

    case 4:
      firstNameTokens = [tokens[0], tokens[1]];
      lastNameTokens = [tokens[2], tokens[3]];
      break;
  }
  const getFirstLettersFromToken = (token) => {
    const parts = token.split('-');
    return parts.map((part) => part[0].toUpperCase()).join('');
  };

  let acronym = '';
  for (const firstNameToken of firstNameTokens) {
    acronym += getFirstLettersFromToken(firstNameToken);
  }

  for (const lastNameToken of lastNameTokens) {
    if (lastNameToken === 'von') {
      acronym += 'v';
    } else {
      const parts = lastNameToken.split('-');
      for (const part of parts) {
        acronym += part[0].toUpperCase();
      }
    }
  }

  return acronym;
};

// ----- CONTOH PENGGUNAAN -----
console.log(generateAcronym('Thomas Meyer')); // TM
console.log(generateAcronym('martin schmidt')); // MS
console.log(generateAcronym('Jan-Erich Schmidt')); // JES
console.log(generateAcronym('Jan Erich Mueller')); // JEM
console.log(generateAcronym('Paul Meyer-Schmidt')); // PMS
console.log(generateAcronym('Paul von Lahnstein')); // PvL
console.log(generateAcronym('Martin von Lahnstein-Meyer')); // MvLM
console.log(generateAcronym('Madonna')); // M
console.log(generateAcronym('Bono')); // B
