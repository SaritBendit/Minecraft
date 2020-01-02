var myWorld = [[], []];
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
            document.querySelector(`#r${i}c${j}`).classList.add("ground");
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
            // document.querySelector(`#${position}`).style.backgroundColor = "sienna";
        }
    }
}
/*------------- create a stone----------------*/
let creatStone = (j, hight) => {
    //check if there is no tree/ground
    for (let indexi = 14; hight > 0; indexi-- , hight--) {
        console.log(indexi);
        let stone = document.querySelector(`#r${indexi}c${j}`);
        if (!stone.classList.contains("leaves") && !stone.classList.contains("ground")) {
            document.querySelector(`#r${indexi}c${j}`).classList.add("stone");
        }
    }
}
/*------getting the Row index for the squre player click------*/
let getIndexRow = (target) => {
    let indexC = parseInt(target.indexOf("c"));
    let indexi = parseInt(target.substring(1, indexC));
    return indexi;
}
/*------getting the Col index for the squre player click------*/
let getIndexCol = (target) => {
    let indexC = parseInt(target.indexOf("c"));
    let indexj = parseInt(target.substring(indexC + 1));
    return indexj;
}
/*----------remove tree from the world------------*/
let removeTreeFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(squreToStorge);
    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("leaves") && !myWorld[getIndexRow(squreToStorge) + 1][getIndexCol(squreToStorge)].classList.contains("ground")) {

        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('leaves');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexRow(squreToStorge)]);
    }
}
/*----------remove ground from the world------------*/
let removeGroundFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(myWorld[getIndexRow(squreToStorge) + 1][getIndexCol(squreToStorge)].classList);

    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("leaves") && !myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("ground")) {
        console.log(squreToStorge);
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('ground');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexRow(squreToStorge)]);
    }
}
/*----------remove stone from the world------------*/
let removeRockFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(myWorld[getIndexRow(squreToStorge) + 1][getIndexCol(squreToStorge)].classList);

    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("stone")) {
        console.log(squreToStorge);
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('stone');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexRow(squreToStorge)]);
    }
}

let removeSqureFromWorld = (e) => {
    console.log(e.target);
    if (e.target.classList.contains('ground')) {
        removeGroundFromWorld(e);
    }
    if (e.target.classList.contains('leaves')) {
        removeTreeFromWorld(e);
    }
    if (e.target.classList.contains('stone')) {
        removeRockFromWorld(e);
    }
}



start();
creatGround();
creatTree(6, 6);
creatStone(10, 3);
for (var k = 0; k < myWorld.length; k++) {
    for (var t = 0; t < myWorld[k].length; t++) {
        myWorld[k][t].addEventListener('click', removeSqureFromWorld);
    }
}
