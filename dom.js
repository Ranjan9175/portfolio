document.getElementById('myforms').addEventListener('submit',(event)=>{
    event.preventDefault();

    var name= document.getElementById("exampleInputname").value;
    var email= document.getElementById("exampleInputEmail1").value;
    var pass= document.getElementById("exampleInputPassword1").value;
    
    const v1 =document.getElementById("my1");
    v1.innerHTML=name;
    const v2 =document.getElementById("my2");
    v2.innerHTML=email;
    const v3 =document.getElementById("my3");
    v3.innerHTML=pass;

   // console.log(name,email,pass);
})