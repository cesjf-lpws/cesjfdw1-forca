/*
This file are part of CESJFGG-2011-1.

CESJFGG-2011-1 is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

CESJFGG-2011-1 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with CESJFGG-2011-1.  If not, see <http://www.gnu.org/licenses/>.
*/
var inicio=document.getElementById("inicio");
inicio.addEventListener("click",iniciar,false);
var senha=document.getElementById("senha");
var palavra=document.getElementById("palavra");
var ok=document.getElementById("ok");
var texto=document.getElementById("texto");
ok.addEventListener("click",okClick,false);

function okClick(){
   for(var i=0; i<senha.value.length; i++){
      if(senha.value[i]===texto.value[0]){   
         palavra.innerHTML = palavra.innerHTML.substr(0,i)+texto.value[0]+palavra.innerHTML.substr(i+1);        
      }
   }
}

function iniciar(){
   palavra.innerHTML="";
   for(var i=0;i<senha.value.length;i++){ 
      palavra.innerHTML+="_";
       
   }

}
