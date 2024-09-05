let boxes = document.querySelectorAll(".box");
// console.log(boxes[3]);
// let selected = (clicked_value) =>{
//     clicked_value = "abs";

// }

const win_patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // selected(clicked_value);
    // box.innerText = 'hello';
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
let checkwinner = () => {
  for (let pattern of win_patterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    let ptr1 = boxes[pattern[0]].innerText;
    let ptr2 = boxes[pattern[1]].innerText;
    let ptr3 = boxes[pattern[2]].innerText;

    if(ptr1 != "" && ptr2 != "" && ptr3 != ""){
        if(ptr1 === ptr2 && ptr2 === ptr3){
            let winn = document.querySelector(".winner");
                winn.innerText = `Winner is Player with ${ptr1}`;
    }
  }
}
}