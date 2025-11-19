const output = document.getElementById("output");

const showData = (data) => {
  output.innerHTML = JSON.stringify(data, null, 2);
};

document.getElementById("get-all").addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/characters");
  const data = await response.json();
  showData(data);
});

document.getElementById("get-single").addEventListener("click", async () => {
  const id = document.getElementById("char-id").value;
  const response = await fetch(`http://localhost:3000/characters/${id}`);
  const data = await response.json();
  showData(data);
});

document.getElementById("element").addEventListener("click", async () => {
  const element = document.getElementById("filter-element").value;
  const response = await fetch(
    `http://localhost:3000/characters?element=${element}`
  );
  const data = await response.json();
  showData(data);
});

document.getElementById("role").addEventListener("click", async () => {
  const role = document.getElementById("filter-role").value;
  const response = await fetch(`http://localhost:3000/characters?role=${role}`);
  const data = await response.json();
  showData(data);
});
