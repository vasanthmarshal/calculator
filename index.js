(function(){
   let screen=document.querySelector('.screen');
   let buttons=document.querySelectorAll('.btn');



   buttons.forEach(function(button) 
   {

    button.addEventListener('click',function(e)
    {
        let value=e.target.value;
        form1.answer.value += value;
    
    })

    }); 

  document.querySelector('.btn-clear').addEventListener('click',function(e) {
        form1.answer.value='';
    });

    document.getElementById("equal").addEventListener('click',function(e){
        if(form1.answer.value.length<=2)
        {
            form1.answer.value="Enter please"
        }
        else{
            form1.answer.value = eval(form1.answer.value);
        }
            
      });

    

   
})();