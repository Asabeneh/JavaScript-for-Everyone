// For loop
for (let i = 1; i <= 10; i++) {
  console.log(`${i}x${i}=${i * i}`);
}
// For loop more example iterated from 100 to 0 stepping by 10
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

//
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is an odd number`);
  }
}