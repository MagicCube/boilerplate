function main() {
  const h1 = document.createElement('h1');
  h1.innerText = 'Hello World!';

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = document.getElementById('root')!;
  root.appendChild(h1);
}

main();

export {};
