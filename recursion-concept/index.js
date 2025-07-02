// !4  = 4*3*2*1

const  fact = (n) => {
  if(n==0) return 1;
  return n * fact(n-1);
}

// 1. 4*fact(4-1) => 4 *  fact(3) = > 3 * fact(3-1) => 3 *fact(2) => 2 * fact(1) => 1 * fact(0) => 1
// 2. 1 * fact(0) => 1
