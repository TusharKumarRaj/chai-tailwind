import { interpretClass } from "../runtime/interpreter.js";

export function applyStyles(elements) {

  elements.forEach(element => {  
    element.classList.forEach(cls => {

      interpretClass(element, cls);

    });

  });
  
}

