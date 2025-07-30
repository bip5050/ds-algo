  class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
  }


  class LinkedList {

      constructor(value){
        const  newNode = new  Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length =1;
      }

      push(value){
        const  newNode = new Node(value);
        if(!this.head){
        this.head = newNode;
        this.tail  =  newNode;

        } else {
        this.tail.next = newNode;
        this.tail  =  newNode;
        this.length ++;
      
        }
      
         return  this;

      }

      pop(){
        if(!this.head){
          return  undefined;
        }
        if(this.length===1){
          this.head = null;
          this.tail =  null;
          return this;
        }
        let pre =  this.head;
        let temp = this.head;
        while(temp.next){
          pre = temp;
          temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
      
        this.length--

        return  this;



      }

      unshift(value){
        const  newNode =  new Node(value);
        if(!this.head){
          this.head = newNode;
          this.tail = newNode
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++
     
        return this;
      }

      shift(){
        if(!this.head){
          return undefined

        }
        if(this.length === 1) {
          this.head = null;
          this.tail = null;
          return  this
        } else {
          let  temp  =  this.head;
          this.head = this.head.next;
          temp.next =  null;

          
        }
          this.length --;
        return  this;

      }

      get(index){

        if(this.length === 0  || this.length<=  index){
            return  undefined;
          
        }
        let  temp = this.head
        for(let i = 0;  i< index ; i++){
            temp = temp.next;

        }
        return  temp ;

      }

      set(index,value){

        if(!this.head){
            return  undefined;
        }
        if(index<0 || index> this.length){
            return undefined
        }

        let  temp = this.head;

        for(let i=0; i<=index; i++) {
          
            temp = temp.next;
        }
          temp.value = value;
        return  this;
      }

      insert(index,value){
        if(index<0 || index> this.length){
            return undefined
        }
        if(index==0){
          const  newNode = new Node(value);
          newNode.next = this.head
          this.head  = newNode;
           return this;
        }
        if(this.length == index) {
           const  newNode = new Node(value);
           this.tail.next = newNode;
           this.tail = newNode;

        }
          let  temp  =  this.head;
          let  pre = this.head;
        for(let  i = 0;  i< index; i++ ){
            pre = temp;
            temp = temp.next;
        }
        const  newNode = new Node(value);
        pre.next = newNode;
        newNode.next = temp;
        this.length++;
         return  this ;

      }

      remove(index){
        if(!this.head || index===0 || index=== this.length){
          return  undefined
        }

        if(index==0){
          let  temp = this.head;
          this.head = temp.next;
          temp.next = null;
          return this;
        }
        if(this.length==index){
         let   pre = this.head;
         let   temp = this.head

         while(!temp.next){
              pre = temp;
              temp = temp.next;
         }
          this.tail = pre;
          this.tail.next = null;

          return this;

        }
          let  before = this.head;
          let  temp =  this.head;
        for(let i=0;  i<index; i++) {
            before = temp;
            temp  =  temp.next;
        }
      
        before.next = temp.next

          temp.next =  null;

        this.length --

        return  this;

      }

      reverse() {
        let pre = null;
        let current = this.head;
        this.tail = this.head; // The old head becomes the new tail
        console.log("tail",this.tail)

        while (current != null) {
          let next = current.next;
          current.next = pre;
          pre = current;
          current = next;
        }
        this.head = pre; // The last processed node is the new head

        return this;
      }
  }

  const  llist = new LinkedList(1)
  console.log(llist.push(4))
    console.log(llist.push(9))
      console.log(llist.push(11))
//   console.log(llist.push(9))
//    console.log(llist.unshift(1))
//   //console.log(llist.shift())
//  // console.log(llist.get(1))
//     console.log(llist.insert(1,5))
  //  console.log(llist.remove(1))
  //console.log(llist.pop())
  console.log(llist.reverse())
  
