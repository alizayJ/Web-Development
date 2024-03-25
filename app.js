// colour changing
 let div = document.querySelector('div');
 let btn = document.querySelector('button');
 let h1 = document.querySelector('h1')
 
 
 function gen_color(){
 let red  = (Math.floor(Math.random()*255))
 let green  = (Math.floor(Math.random()*255))
 let blue  = (Math.floor(Math.random()*255))
 let color = `rgb(${red}, ${green}, ${blue})`
 div.style.backgroundColor=color;
 h1.innerHTML = 'hello';
 }
 btn.onclick = gen_color;