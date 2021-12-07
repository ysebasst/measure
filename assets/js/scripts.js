const measureDOMEL = document.createElement("div");

const spanDOMEL = document.createElement("span");

document.body.style.margin = "0";
document.body.style.backgroundColor = "#ddd";

measureDOMEL.style.display = "flex";
measureDOMEL.style.justifyContent = "center";
measureDOMEL.style.alignItems = "center";
measureDOMEL.style.minHeight = "100vh";
measureDOMEL.style.zIndex = "100";

spanDOMEL.style.fontSize = "12vw";
spanDOMEL.style.fontWeight = "bold";
spanDOMEL.style.color = "red";
spanDOMEL.style.opacity = ".5";

measureDOMEL.appendChild(spanDOMEL);

document.body.appendChild(measureDOMEL);

setInterval(() => {
  let width = visualViewport.width.toFixed(2)
  let height = visualViewport.height.toFixed(2)
  spanDOMEL.textContent = `${width} X ${height}`;
}, 500);
