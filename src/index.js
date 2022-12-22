import { processJson } from 'public/build/release.js';

document.body.innerText = `Check console for debug log.\n
  result: ${processJson(JSON.stringify([1, 2, 3]))}
`
