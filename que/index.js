 class Que {
   
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enque (element) {
        this.items[ this.rear] = element;
        this.rear++
    }

    dque () {
        const  item  = this.items[this.front];
        delete this.items[this.front];
        this.front++
         return item;

    }

    isEmpty() {
         return this.rear - this.front===0;
    }

    print(){
        console.log(this.items)
    }


 } 

 const  que = new Que();
 que.enque(5);
 que.enque(6)
 que.dque();
 que.enque(7);
 que.print();