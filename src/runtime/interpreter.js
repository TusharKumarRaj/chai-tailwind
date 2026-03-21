import { config } from "../utils/config.js";
import { parseClass } from "../core/parser.js";

const handlers = {

  p: (element, value) => {

    const spacing = config.spacing[value];
    if (spacing) element.style.padding = spacing;

  },

  m: (element, value) => {

    const spacing = config.spacing[value];
    if (spacing) element.style.margin = spacing;

  },

 bg: (element, value) => {  

  const [color, shade] = value.split("-");  
  const colorValue = config.colors[color]?.[shade];

  if (colorValue) {
    element.style.backgroundColor = colorValue;
  }
},

text: (element, value) => {

  const parts = value.split("-");

  if (parts.length === 1) {  
    const size = config.fontSize[value];

    if (size) {

      element.style.fontSize = size;
      return;

    }

    const color = config.colors[value];

    if (color) element.style.color = color;

  } 
  else {

    const [color, shade] = parts; 
    const c = config.colors[color]?.[shade];

    if (c) element.style.color = c;

  }
},

rounded: (element, value) => {

   if (value === "DEFAULT") return; 

  const radius = config.borderRadius[value || "DEFAULT"];  
  if (radius) element.style.borderRadius = radius;

},

shadow: (element, value) => {

   if (value === "DEFAULT") return;

  const s = config.shadows[value || "DEFAULT"];
  if (s) element.style.boxShadow = s;

},

flex: (element, value) => { 

  if (!value) { 
    element.style.display = "flex";
    return;
  }

  if (value === "row") { 
    element.style.display = "flex";
    element.style.flexDirection = "row";
  }

  if (value === "col") {
    element.style.display = "flex";
    element.style.flexDirection = "column";
  }
},

justify: (element, value) => { 

  const map = {  
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
  };

  const justify = map[value];

  if (justify) {
    element.style.display = "flex"; 
    element.style.justifyContent = justify;
  }

},

items: (element, value) => {
  
  const map = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    baseline: "baseline",
  };

  const align = map[value];

  if (align) {
    element.style.display = "flex";
    element.style.alignItems = align;
  }

}

};

export function interpretClass(element, cls) {

  const parsed = parseClass(cls);

  if (!parsed) return;

  const { hover, prefix, value } = parsed; 

  const handler = handlers[prefix];

  if(!handler) return;

  if(!hover){
     handler(element, value);
  }

  if(hover==="hover")
  {
    let original = "";

    element.addEventListener("mouseenter", () => {
      original = element.style.backgroundColor;
      handler(element,value);
    })

    element.addEventListener("mouseleave" , () => {

      element.style.backgroundColor=original;
      
    })
  }
  
};
