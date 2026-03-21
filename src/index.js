import { scanDOM } from "./core/scanner.js";
import { applyStyles } from "./core/styler.js";

export default function chaiTailwind() {

  const elements = scanDOM();

  applyStyles(elements);

}

if (typeof window !== "undefined") {

  window.chaiTailwind = chaiTailwind;
  
}