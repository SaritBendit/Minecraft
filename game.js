var myWorld = [[], []];
let div = document.createElement("div");
let game = document.querySelector(".game");
let groundBlock = new Block("ground" ,"./img/gound1.png" );
let stoneBlock = new Block("stone" ,"./img/stone1.jpg" );
let leavesBlock = new Block("leaves" ,"./img/" );
let treeTrunkBlock = new Block("tree trunk" ,"./img/" );

let start = () => {
    for (var i = 0; i < 15; i++) {
        myWorld[i] = [];
        for (var j = 0; j < 25; j++) {
            let div = document.createElement("div");
            div.classList.add("emptySqure");
            if (j === 0 && i === 0) {
                div.style.left = 700 + 'px';
                div.style.top = 0 + 'px';
            }
            div.setAttribute("id", `r${i}c${j}`);
            myWorld[i].push(div);
            game.appendChild(div);
        }
    }
    console.log(myWorld);
}

/*------------- create a ground----------------*/
let creatGround = () => {
    for (let i = 11; i < myWorld.length; i++) {
        for (let j = 0; j < myWorld[i].length; j++) {
            document.querySelector(`#r${i}c${j}`).classList.add("ground");        
        }
    }
}
//getting a first position of myWorld[i][j] of the tree
let creatTree = (starti, startj) => {
    let x, y;
    {
        for (x = starti; x < starti + 3; x++) {
            for (y = startj; y < startj + 3; y++) {
                let position = "r" + x + "c" + y;
                document.querySelector(`#${position}`).classList.add("leaves");
                console.log(position);
            }

        }
        for (let x = starti + 3; x < 11; x++) {
            let position = "r" + x + "c"+(startj+1);
            document.querySelector(`#${position}`).classList.add("trunk");
        }
    }
}
/*------------- create a stone----------------*/
let creatStone = (j, hight) => {
    //check if there is no tree/ground
    for (let indexi = 10; hight > 0; indexi-- , hight--) {
        console.log(indexi);
        let stone = document.querySelector(`#r${indexi}c${j}`);
        if (!stone.classList.contains("leaves") && !stone.classList.contains("ground")) {
            document.querySelector(`#r${indexi}c${j}`).classList.add("stone");
        }
    }
}

let playerWantTreesAxe= ()=>{
    game.removeAttribute('id','curoserPickaxe');
    game.removeAttribute('id','curosershovel');
    game.setAttribute('id','curoserAxe');
    console.log( document.querySelector(".game"));
}

let playerWantGround = ()=>{
    game.removeAttribute('id','curoserAxe');
    game.removeAttribute('id','curosershovel');
    game.setAttribute('id','curoserPickaxe');
    console.log(document.querySelector(".game"));
}
let playerWantRocks = ()=>{
    game.removeAttribute('id','curoserAxe');
    game.removeAttribute('id','curoserPickaxe');
    game.setAttribute('id','curosershovel');
    console.log(document.querySelector(".game"));
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
let removeTreetrunkFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(squreToStorge);
    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("treetrunk")){
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('treetrunk');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)]);
    }
}
let removeLeavesFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(squreToStorge);
    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("leaves") ) {
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('leaves');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)]);
    }
}
/*----------remove ground from the world------------*/
let removeGroundFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(myWorld[getIndexRow(squreToStorge)+1][getIndexCol(squreToStorge)].classList);
    if(!myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("leaves") && !myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("ground")&& !myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("stone")){
        console.log(squreToStorge);
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('ground');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)]);
    }
}
/*----------remove stone from the world------------*/
let removeRockFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    console.log(myWorld[getIndexRow(squreToStorge) + 1][getIndexCol(squreToStorge)].classList);
    console.log(getIndexRow(squreToStorge) + 1);

    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("stone")) {
        console.log(squreToStorge);
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('stone');
        console.log(myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)]);
    }
}
let removeSqureFromWorld =(e)=>{
    console.log(e.target);
    if (e.target.classList.contains('ground') && (game.getAttribute("id") === "curoserPickaxe")){
        removeGroundFromWorld(e);
    }
    if (e.target.classList.contains('leaves') && (game.getAttribute("id") === "curoserAxe")){
        removeLeavesFromWorld(e);
    }
    if (e.target.classList.contains('treetrunk') && (game.getAttribute("id") === "curoserAxe")){
        removeTreetrunkFromWorld(e);
    }
    if (e.target.classList.contains('stone') && (game.getAttribute("id") === "curosershovel")){
        removeRockFromWorld(e);
    }
}



start();
creatGround();
creatTree(5, 6);
creatStone(13 ,4);
creatStone(12 ,4);
creatStone(16 ,5);
for (var k = 0; k < myWorld.length; k++) {
    for (var t = 0; t < myWorld[k].length; t++) {
       myWorld[k][t].addEventListener('click', removeSqureFromWorld);
  }
}

let axe = document.querySelector('.axe');
axe.addEventListener('click',playerWantTreesAxe);
/*
let pickaxe = document.querySelector('.pickaxe');
pickaxe.addEventListener('click',playerWantRocks);
*/
let pickaxe = document.querySelector('.pickaxe');
console.log(pickaxe);

pickaxe.addEventListener('click',playerWantGround);

