count.innerHTML = getCounterFromLocalStorage() || 0;

plusBtn.onclick = increaseOne;
minusBtn.onclick = decreaseOne;
saveBtn.onclick = saveLocalStorage;
removeBtn.onclick = removeLocalStorage;

function getCounterFromLocalStorage() {
  return localStorage.getItem("count");
}

function increaseOne() {
  count.innerText = Number(count.innerText) + 1;
}

function decreaseOne() {
  count.innerText = Number(count.innerText) - 1;
}

function saveLocalStorage() {
  localStorage.setItem("count", count.innerText);
}

function removeLocalStorage() {
  localStorage.removeItem("count", count.innerText);
}
