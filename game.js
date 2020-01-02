var myWorld = [[], []];
let groundBlock = new Block("ground" ,"./img/gound1.png" , 0);
let stoneBlock = new Block("stone" ,"./img/stone1.jpg" , 0);
let leavesBlock = new Block("leaves" ,"./img/leaves.jpg" , 0);
let treeTrunkBlock = new Block("tree trunk" ,"./img/treetrunk.png" , 0);

let div = document.createElement("div");
let game = document.querySelector(".game");
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
    myWorld.indexOf([x, y])
    {
        for (x = starti; x < starti + 3; x++) {
            for (y = startj; y < startj + 3; y++) {
                let position = "r" + x + "c" + y;
                document.querySelector(`#${position}`).classList.add("leaves");
            }

        }
        for (let x = starti + 3; x < 11; x++) {
            let position = "r" + x + "c7";
            document.querySelector(`#${position}`).classList.add("trunk");

        }
    }
}
/*------------- create a stone----------------*/
let creatStone = (j, hight) => {
    //check if there is no tree/ground
    for (let indexi = 10; hight > 0; indexi-- , hight--) {
        let stone = document.querySelector(`#r${indexi}c${j}`);
        if (!stone.classList.contains("leaves") && !stone.classList.contains("ground")) {
            document.querySelector(`#r${indexi}c${j}`).classList.add("stone");
        }
    }
}

let playerWantTreesAxe= ()=>{
    game.setAttribute('id','curoserAxe');
}

let playerWantGround = ()=>{
    game.removeAttribute('id');
    game.setAttribute('id','curoserPickaxe');
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
    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("leaves") ) {
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('leaves');
    }
}
/*----------remove ground from the world------------*/
let removeGroundFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    if(!myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("leaves") && !myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("ground")&& !myWorld[getIndexRow(squreToStorge)-1][getIndexCol(squreToStorge)].classList.contains("stone")){
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('ground');
        groundBlock.count++;
        console.log(groundBlock.count);
        
    }
}
/*----------remove stone from the world------------*/
let removeRockFromWorld = (e) => {
    const squreToStorge = e.currentTarget.id;
    if (!myWorld[getIndexRow(squreToStorge) - 1][getIndexCol(squreToStorge)].classList.contains("stone")) {
        myWorld[getIndexRow(squreToStorge)][getIndexCol(squreToStorge)].classList.remove('stone');
        stoneBlock.count++;
    }
}
let removeSqureFromWorld =(e)=>{
    if (e.target.classList.contains('ground')){
        removeGroundFromWorld(e);
    }
    if (e.target.classList.contains('leaves')){
        removeTreeFromWorld(e);
    }
    if (e.target.classList.contains('stone')){
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
let shovel = document.querySelector('.shovel');
shovel.addEventListener('click',playerWantGround);

