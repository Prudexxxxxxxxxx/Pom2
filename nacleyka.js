function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  

   

    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    }


    username.value = localStorage.getItem('username');
    username.oninput = () => {
        localStorage.setItem('username', username.value)
    };
    

    //==================




    function formTable(selector){
      
      var wrapper = document.querySelector(selector);
      var form = wrapper.getElementsByTagName("form")[0];
      var table = wrapper.getElementsByTagName("table")[0];
      
      form.onsubmit = function ter (ev){
        ev = ev || event;
        ev.preventDefault();
       


        var tr = document.createElement("tr"), td;
     
              
        
        for(let i = 0; i <= 3; i++){
          td = document.createElement("td");

  


          if( i == 0){
            
            let zayvka = this.elements[i];
            zayvka1 = [];
  
            document.getElementById('zayvka1').innerHTML= zayvka.value
            td.innerHTML = zayvka.value
            tr.classList.add("clas");
            tr.appendChild(td);
           }
           
         if( i == 1){
         let dat = this.elements[i];
         document.getElementById('data1').innerHTML= dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`);
          td.innerHTML = dat.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
          tr.classList.add("clas");
          tr.appendChild(td);
      }


     
         if( i == 2){
          let sel = this.elements[i];
          // document.getElementById('sel').innerHTML= sel.value
          td.innerHTML = sel.value
     
          // let itogo =+ sel.value
          // console.log(itogo)
          tr.appendChild(td);
          td.classList.add('stoim')
          tr.classList.add("clas");
         }
        
         
         if( i == 3){
          let tel1 = this.elements[i];
          document.getElementById('tel1').innerHTML= tel1.value
        }

        
           }    
        table.appendChild(tr);
        let  parent = document.getElementById("ta");
        let  nodesSameClass = parent.getElementsByClassName("clas");
        document.querySelector('#col').innerHTML= 'ЗАЯВОК '+ nodesSameClass.length;

        var summ = 0;
        var services = document.getElementsByClassName("stoim");
        for (var i = 0; i < services.length; i++) {
              summ += parseInt( services.item(i).innerHTML );
           document.querySelector('#col1').innerHTML= summ + ' р';
        }

        

        // // // стоимость выводим
        
        // let stoim = document.querySelectorAll('.stoim');
        // let itogoStoimost = 0;
        // for(i = 0; i => stoim.length; i++){
        //   itogoStoimost = +stoim.innerHTML
        // }
        // console.log( itogoStoimost);
 


 

    
        
        document.querySelector('.tatb').onclick = function(del) {
        let delet = del.target.closest('tr');
         if (confirm('УДАЛИТЬ ЗАЯВКУ ?')) {
          
             delet.remove()
             let  nodesSameClass = parent.getElementsByClassName("clas");
             document.querySelector('#col').innerHTML= 'ЗАЯВОК '+  nodesSameClass.length;
             var summ = 0;
             var services = document.getElementsByClassName("stoim");
             for (var i = 0; i < services.length; i++) {
                summ += parseInt( services.item(i).innerHTML );
                document.querySelector('#col1').innerHTML=  summ + 'р';
             }
                    
             
             
       
           } 
          else {
        
         }
       }

      }  

    }
    formTable(".wrapper");  


    //===========================

//=================================ЧАСЫ
function clock(){
  var date = new Date(),
         hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
         minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
         seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
}
setInterval(clock, 1000);
clock();
  
   //=============================LocalStorage
