export function parseClass(cls) {

  let hover = null;
  let utility = cls;

  if(cls.includes(":"))
  {
    const parts = cls.split(":");
    hover = parts[0]; 
    utility = parts[1]; 
  }


  if (!utility.startsWith("chai-")) return null;


  utility = utility.slice(5); 


  if (!utility.includes("-")) return null; 

  const parts = utility.split("-");  
  const prefix = parts[0];
  const value = parts.slice(1).join("-");


  return {
    hover,
    prefix,
    value
  };
}



