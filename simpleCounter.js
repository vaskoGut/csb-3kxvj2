const target = 100;
const speed = 10;
let initValue = 0;
const counterValue = document.getElementById("counterValue");

const updateIt = () => {
  if (initValue > target - 1) return;
  initValue += 1;
  counterValue.innerText = initValue;
  setTimeout(updateIt, speed);
};

updateIt();
