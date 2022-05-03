window.onload = function () {
  console.log("game of life script was loaded");
  const container = document.getElementById("gameOfLife");
  initializeGrid(container);
};

function initializeGrid(container) {
  var displayWidth = window.innerWidth;
  var displayHeight = window.innerHeight;
  const gridSize = 16;
  var numRows = Math.floor(displayWidth / gridSize);
  var numColumns = Math.floor(displayHeight / gridSize);

  for (let index = 0; index < numColumns * numRows; index++) {
    const cell = document.createElement("div");
    cell.id = `${index}`;
    cell.style.border = "1px solid black";
    cell.style.aspectRatio = "1";
    cell.style.height = `${gridSize}`;
    cell.style.width = `${gridSize}`;
    container.appendChild(cell);
  }

  // container.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`

  console.log(
    `numRows: ${numRows}\n numColumns: ${numColumns}\n container:${container.id}`
  );

  window.onresize = function () {
    displayWidth = window.innerWidth;
    displayHeight = window.innerHeight;
  };
}
