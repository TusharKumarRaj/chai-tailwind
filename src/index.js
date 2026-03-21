import { scanDOM } from "./core/scanner.js";
import { applyStyles } from "./core/styler.js";

function chaiTailwind() {

  const elements = scanDOM();

  applyStyles(elements);
  
}

export default chaiTailwind;