// fib series is  [0,1,1,2,3,5,8];

const fiboNacci = (n) =>{
            let fib =[0,1];
        for(let  i=2; i<n ; i++){
           
             fib[i] = fib[i-1] +fib[i-2]
         

        }

        return fib;
}

const  recursiveFobonacci = (n) =>{

            if(n<2){
                return n;
            }
                              1                                             
            return recursiveFobonacci(n-1) +  recursiveFobonacci(n-2)

}


console.log(recursiveFobonacci(3));





 