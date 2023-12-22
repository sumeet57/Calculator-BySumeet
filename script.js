let out="";
let final;
var newp;
var newp1;
let temp="";
let outdis = document.querySelector("#inout");
var im = document.getElementById("divide");

var buttons = document.querySelectorAll(".buttons");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      console.log(this.value);


    if(out==='0'){
      temp="";
      out="";
      newp= this.value;
      newp1= this.value;
    }  
      newp="";
      newp1="";
   newp = this.value;
   newp1= this.value;
  if(newp==='b'){
    newp="";
    newp1="";
    var up = out.slice(0, -1);
    var up1 = temp.slice(0, -1);
    out = up;
    temp = up1;
    outdis.textContent = temp;
  }
  if(newp==='x'){
    newp="*";
    newp1="×";
  }
  if(newp==='/'){
    newp1="÷";
  }
  if(newp==='C'){
    newp="";
    newp1="";

    document.querySelector(".clean")
    .style.right = "0";
    document.querySelector(".clean")
    .style.width = "100%";
    
    setTimeout(funnn,500);
    clear();



    
  }
  if(newp==='='){
    newp="";
    newp1="";
    cal();
  
  }
  if(out===""&&newp==='+'){
    newp="";
    newp1="";
  }
  if(out===""&&newp==='-'){
    newp="";
    newp1="";
  }
  if(out===""&&newp==='/'){
    newp="";
    newp1="";
  }
  if(out===""&&newp==='*'){
    newp="";
    newp1="";
  }
  if(out===""&&newp==='%'){
    newp="";
    newp1="";
  }


  if(newp==='+'||newp1==="+"){
  if(out.charAt(out.length - 1)==='+'
  ||out.charAt(out.length - 1)==='-'
  ||out.charAt(out.length - 1)==='/'
  ||out.charAt(out.length - 1)==='*'
  ||out.charAt(out.length - 1)==='%'){
    newp="";
    newp1="";
  }}
  if(newp==='-'||newp1==="-"){
    if(out.charAt(out.length - 1)==='+'
    ||out.charAt(out.length - 1)==='-'
    ||out.charAt(out.length - 1)==='/'
    ||out.charAt(out.length - 1)==='*'
    ||out.charAt(out.length - 1)==='%'){
      newp="";
      newp1="";
    }}
    if(newp==='/'||newp1==="/"){
      if(out.charAt(out.length - 1)==='+'
      ||out.charAt(out.length - 1)==='-'
      ||out.charAt(out.length - 1)==='/'
      ||out.charAt(out.length - 1)==='*'
      ||out.charAt(out.length - 1)==='%'){
        newp="";
        newp1="";
      }}
      if(newp==='*'||newp1==="x"){
        if(out.charAt(out.length - 1)==='+'
        ||out.charAt(out.length - 1)==='-'
        ||out.charAt(out.length - 1)==='/'
        ||out.charAt(out.length - 1)==='*'
        ||out.charAt(out.length - 1)==='%'){
          newp="";
          newp1="";
        }}
        if(newp==='%'||newp1==="%"){
          if(out.charAt(out.length - 1)==='+'
          ||out.charAt(out.length - 1)==='-'
          ||out.charAt(out.length - 1)==='/'
          ||out.charAt(out.length - 1)==='*'
          ||out.charAt(out.length - 1)==='%'){
            newp="";
            newp1="";
          }}
    
  



  out+=newp;
  temp+=newp1;
  outdis.textContent = temp;

      
    });
  }



function clear(){
  newp="";
  newp1="";
  out="";
  temp="";
}
function cal(){

  if(out===""){
    out="0";
    temp="0";
  }
  

  if(out.charAt(out.length - 1)==='+'
  ||out.charAt(out.length - 1)==='-'
  ||out.charAt(out.length - 1)==='/'
  ||out.charAt(out.length - 1)==='*'
  ||out.charAt(out.length - 1)==='%'){

    out="0";
    temp="0";
  }
    
  newp="";
  newp1="";
  out = eval(out);
  temp = out
  console.log(eval(out));
 outdis.textContent = temp;
  
}
function funnn(){
  document.querySelector(".clean")
  .style.right = "0";
  document.querySelector(".clean")
  .style.width = "0%";
}



