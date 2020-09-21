var size = 40;
var grid;
var color;
var on = false;

var grid_rows = size;
var grid_cols = size;

const MIN_GRID_ROW = 10;
const MAX_GRID_ROW = 200;
const MIN_GRID_COL = 10;
const MAX_GRID_COL = 200;

drawGrid(size, size);
document.getElementById("nSize").value = size;

//Resize Button Click Event
document.getElementById("nSizeGo").addEventListener("click", function () {
  var newSize = document.getElementById("nSize").value;

  drawGrid(newSize, newSize);
});

//Reset Button Click Event
document.getElementById("reset").addEventListener("click", function () {
  drawGrid(grid_rows, grid_cols); //Just redraw to the last good setting
});

function drawGrid(rows, cols) {
  //Input check
  if (
    rows < MIN_GRID_ROW ||
    rows > MAX_GRID_ROW ||
    rows < MIN_GRID_COL ||
    rows > MAX_GRID_COL
  ) {
    alert("Grid size is out of bounds!");
    return;
  }

  //Update the new good setting
  grid_rows = rows;
  grid_cols = cols;

  //Initialize the grid
  grid = hoverGrid(grid_rows, grid_cols, function (el, row, col, i) {
    if (on == true){
      el.style.backgroundColor = getRandomColor();
    }else if (on == false){
      el.className = color;
      el.style.backgroundColor = color;
    }
      
  });

  //Remove any existing grids
  gridContainer = document.querySelector("#gridContainer");
  if (gridContainer.hasChildNodes()) {
    gridContainer.childNodes.forEach((element) => {
      gridContainer.removeChild(element);
    });
  }

  //Append the new grid
  gridContainer.appendChild(grid);
}

function hoverGrid(rows, cols, callback) {
  var i = 0;

  var grid = document.createElement("table");
  grid.className = "grid";
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement("tr"));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement("td"));

      cell.addEventListener(
        "mouseover",
        (function (el, r, c, i) {
          return function () {
            callback(el, r, c, i);
          };
        })(cell, r, c, i),
        false
      );
    }
  }

  return grid;
}
document.getElementById("pink").addEventListener("click", function () {
  on = false;
  color = "pink";
  
});
document.getElementById("yellow").addEventListener("click", function () {
  on = false;
  color = "yellow";
  
});
document.getElementById("green").addEventListener("click", function () {
  on = false;
  color = "green";
  
});
document.getElementById("red").addEventListener("click", function () {
  on = false;
  color = "red";
  
});
document.getElementById("blue").addEventListener("click", function () {
  on = false;
  color = "blue";
  
});
document.getElementById("black").addEventListener("click", function () {
  on = false;
  color = "black";
  
});
document.getElementById("white").addEventListener("click", function () {
  on = false;
  color = "white";
  
});

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var randomColor = "#";
  for (var i=0;i < 6; i++){
    randomColor += letters[Math.floor(Math.random() *16 )];
  }
  return randomColor
}
document.getElementById("rainbow").addEventListener("click",function (){
  on = true
   });