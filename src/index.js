import { scanDOM } from "./core/scanner.js";
import { applyStyles } from "./core/styler.js";

export function chaiTailwind() {

  const elements = scanDOM();

  applyStyles(elements);
  
}

document.addEventListener("DOMContentLoaded", chaiTailwind);

const observer = new MutationObserver(() => {

  chaiTailwind();

});

observer.observe(document.body, {

  childList: true,
  subtree: true
});