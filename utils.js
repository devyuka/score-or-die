export function sum(a, b) {
  return a + b;
}

export function validateZip(zipcode) {
  const regex = /[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]/g;

  if (regex.test(zipcode)) {
    return true;
  }
  return false;
}

export function validateName(name) {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/g;

  if (regex.test(name)) {
    return true;
  }
  return false;
}
