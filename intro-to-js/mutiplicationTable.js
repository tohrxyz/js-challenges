let i = 1;
let j = 1;

let range = 20;

for(i; i <= range; i++){
  for(j; j <= range; j++){
    console.log(`${i} x ${j} = ${i * j}`);
  }
  j = 1;
  console.log("\n");
}
