const FONT = {
  A: [
    " ### ",
    "#   #",
    "#####",
    "#   #",
    "#   #"
  ],
  C: [
    " ####",
    "#    ",
    "#    ",
    "#    ",
    " ####"
  ],
  E: [
    "#####",
    "#    ",
    "#####",
    "#    ",
    "#####"
  ]
};

document.getElementById("gen").addEventListener("click", () => {
  const input = document.getElementById("text").value.toUpperCase();
  let lines = ["", "", "", "", ""];

  for (let c of input) {
    if (!FONT[c]) continue;
    FONT[c].forEach((row, i) => {
      lines[i] += row + " ";
    });
  }

  document.getElementById("output").value = lines.join("\n");
});
