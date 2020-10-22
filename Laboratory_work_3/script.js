
const incrmt = document.getElementById("increment");
const decrmt = document.getElementById("decrement");
const resrt = document.getElementById("reset");
const val = document.getElementById("val");

incrmt.addEventListener("click", () => {
    val.innerHTML++;
});

decrmt.addEventListener("click", () => {
    val.innerHTML--;
});

resrt.addEventListener("click", () => {
    val.innerHTML = "0";
});

const redclr = document.getElementById("Red");
const greclr = document.getElementById("Green");
const bluclr = document.getElementById("Blue");

redclr.addEventListener("click", () => {
    val.style ="color:red;";
});
greclr.addEventListener("click", () => {
    val.style ="color:green;";
});
bluclr.addEventListener("click", () => {
    val.style ="color:Blue;";
});

function chang() {
    var resultete;
    var selrct = document.getElementById("SelectNam").options.selectedIndex;
    var znach= document.getElementById("SelectNam").options[selrct].value;
    var val1 = document.getElementById("val").textContent;
    var val2 = Number(document.getElementById("val2").value);

    switch (znach) {
      case '+': resultiv=(parseInt(val1)+parseInt(val2));break;
      case '-': resultiv=(parseInt(val1)-parseInt(val2));break;
      case '*': resultiv=(parseInt(val1)*parseInt(val2));break;
      case '/': 
      if (val2) { 
        resultiv=(parseInt(val1)/parseInt(val2));
        } else {
            resultete = '';
        }
        break;
      default:
        resultete = 'Select operation';
        }

    document.getElementById("resultiv").innerHTML = resultiv;
  }
