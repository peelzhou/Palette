//Use the for loop to generate 32768 rgb color components.
const Data = () => {
  const data = [];
  let count = 0;
  for (let i = 0; i < 256; i += 8) {
    for (let j = 0; j < 256; j += 8) {
      for (let m = 0; m < 256; m += 8) {
        count++;
        data.push({ id: count, colorComp: [i, j, m] });
      }
    }
  }
  return data;
};

export default Data;
