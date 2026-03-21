import { chaiTailwind } from "../src/index.js";

document.addEventListener("DOMContentLoaded", chaiTailwind);

const observer = new MutationObserver(() => {
  chaiTailwind();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});