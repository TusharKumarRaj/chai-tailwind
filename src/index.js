function chaiTailwind() {

  const elements = scanDOM();

  applyStyles(elements);
  
}

export default chaiTailwind;

if (typeof window !== "undefined") {

  window.chaiTailwind = chaiTailwind;

}