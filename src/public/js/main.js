const output = document.getElementById("output");

const showLoading = () => {
  output.innerHTML = "Loading...";
  output.style.color = "gray";
};

const showData = (data) => {
  output.innerHTML = JSON.stringify(data, null, 2);
  output.style.color = "black";
};

const showError = (error) => {
  output.innerHTML = `Error: ${error}`;
  output.style.color = "red";
};

// get all characters
document.getElementById("get-all").addEventListener("click", async () => {
  showLoading();
  try {
    const element = document.getElementById("filter-element").value;
    const weapon = document.getElementById("filter-weapon").value;
    const role = document.getElementById("filter-role").value;

    const response = await fetch(
      `http://localhost:3000/api/characters?element=${element}&weapon=${weapon}&role=${role}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    showData(data);
  } catch (error) {
    showError(error.message);
  }
});

// get single character
document.getElementById("get-single").addEventListener("click", async () => {
  showLoading();
  try {
    const id = document.getElementById("char-id").value;
    if (!id) {
      showError("Please enter a character ID");
      return;
    }
    const response = await fetch(`http://localhost:3000/api/characters/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    showData(data);
  } catch (error) {
    showError(error.message);
  }
});
