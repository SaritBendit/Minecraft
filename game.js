var myWorld = [];
let div = document.createElement("div");
let start = () => {
    for (var i = 0; i < 20; i++) {
        myWorld[i] = [];
        for (var j = 0; j < 20; j++) {
            let div = document.createElement("div");
            div.classList.add("emptySqure");
            if (j === 0 && i === 0) {
                div.style.left = 700 + 'px';
                div.style.top = 0 + 'px';
            }
            div.setAttribute("id", `r${i}c${j}`);
            myWorld[i].push(div);
            document.querySelector(".game").appendChild(div);
        }
    }
    console.log(myWorld);
}
let creatGround = () => {
    for (let i = 15; i < myWorld.length; i++) {
        for (let j = 0; j < myWorld[i].length; j++) {
            document.querySelector(`#r${i}c${j}`).style.backgroundColor = 'brown';
        }
    }
}
//getting a first position of myWorld[i][j] of the tree

let creatTree = (starti, startj) => {
    let x, y;
    myWorld.indexOf([x, y])
    {
        for (x = starti; x < starti + 3; x++) {
            for (y = startj; y < startj + 3; y++) {
                let position = "r" + x + "c" + y;
                document.querySelector(`#${position}`).classList.add("leaves");
                console.log(position);
            }
        }
        for (let x = starti + 3; x < 15; x++) {
            let position = "r" + x + "c7";
            document.querySelector(`#${position}`).classList.add("leaves");
        }
    }
}
start();
creatGround();
creatTree(6, 6);