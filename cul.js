let st ="";
let buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((but)=>{
    but.addEventListener('click',(value)=>{
        if(value.target.innerHTML =='='){
            st = eval(st)
            document.querySelector('input').value=st
        }
     else   if(value.target.innerHTML =='c'){
        st="";
            document.querySelector('input').value=st
        }


        else{
        console.log(value.target)
        st += value.target.innerHTML;
        document.querySelector('input').value=st
    }
    })
})