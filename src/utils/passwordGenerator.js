const passwordGenerator = () => {

  const length = 16
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!?@#$%&*';
  const password = Array(length).fill(chars).map(x => { 
  return x[Math.floor(Math.random()*chars.length)]} ).join('');

  return password

}

export default passwordGenerator;

