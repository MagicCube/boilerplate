import { createRoot } from 'react-dom/client';

function main() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.querySelector('body > #root')!);
  root.render(<h1>Hello, world</h1>);
}

main();

export {};
