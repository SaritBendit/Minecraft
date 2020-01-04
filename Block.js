class Block {
    constructor(type, img ) {
        this.type = type;
        this.img = img;
        this.count = 0;
    }
    addBlock() { this.count++; }
    decreaseBlock() {
        if (this.count > 0) {
            this.count--;
        }
    }
}