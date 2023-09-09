AOS.init({duration:1200});
var count=1;
function fun()
{ 
  
  var a=document.getElementById('details');
  if(count==1)
  {
  alert('hi');
  a.style.marginTop='30px';
  a.style.marginLeft='10px';

  count+=1;
  }
  else{
    a.style.marginTop='50%';
   count=1;
  }
}