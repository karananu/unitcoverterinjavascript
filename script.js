// document.getElementById('back1').addEventListener("onmouseover",abc);
// function abc()
// {
//     document.getElementById('back1').style.filter="grayscale(0%)";
// });
// document.getElementById('back1').onmouseout=xyz;
// function xyz()
// {
//     document.getElementById('back1').style.filter="grayscale(100%)";
// }

var feet= document.getElementById('feet');
var inch=document.getElementById('inch');

feet.addEventListener(
    'input',function(){
      let f=this.value;
      let i= f*12;
      inch.value=i;

    });
 inch.addEventListener(
        'input',function(){
          let i=this.value;
          let f= i/12;
          if(!Number.isInteger(f)){
              f=f.toFixed(2);
          };
          feet.value=f;
    
        });