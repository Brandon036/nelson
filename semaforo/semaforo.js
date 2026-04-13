var semaforoA = document.getElementById("semaforoA")
var semaforoB = document.getElementById("semaforoB")

semaforoA.style.transform = "translate(50px, 100px)";

semaforoB.onmousedown = function (event) {
    function mover(e) {
        semaforoB.style.left = e.pageX + "px";
        semaforoB.style.top = e.pageY + "px";
    }
  
    document.addEventListener("mousemove", mover);
  
    document.onmouseup = function () {
      document.removeEventListener("mousemove", mover);
      document.onmouseup = null;
    };
};