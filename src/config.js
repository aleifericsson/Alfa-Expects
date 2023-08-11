var config = {
    a : 'b41c', 
    b : '20f',
    c : '9',
    d : '0703a',
    e : 'e',
    f : '11d5ff',
    g : '02',
    h : '2',
    i : 'fc2c',
    n : '4f4',
    o : '3c6947b',
    p : 'db6402c18f',
    q : '🤨',
    r : '7632f',
    s : '6af79',
    t : '654e409',    
  }

const decrypt = async (passcode) => {
  const arr = await passcode.toLowerCase().split(" ")[0].split("");
  let code = "";
  arr.forEach(char => code = code+config[char]);
  return code;
}

export default decrypt;