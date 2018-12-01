// function loadJSON(file) {
//   return new Promise((resolve,reject)=>{
//     return fetch(file).then(response=>{
//       if(response.ok){
//         resolve(response.json());
//       }
//       else{
//         reject(new Error('error'));
//       }
//     })
//   })
// }
// var fetchedData=loadJSON("dynamic.json");
// fetchedData.then(data=>{
//   console.log(data);
// })
// var child2=document.querySelector("#child2");
// function carrer(car){
//   var h2=document.createElement("h1");
//   h2.textContent="Carier Object";
//   child2.appendChild(h2);
//
//   var heading=document.createElement("hr");
//   child2.appendChild(heading);
//
//   var p=document.createElement("p");
//   p.textContent=car.info;
//   child2.appendChild(p);
//
// }
function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
})

var child2=document.querySelector(".child2");
function carrer(c){
  var chead=document.createElement("h2");
  chead.textContent="CarrerObjective";
  child2.appendChild(chead);

  var chr=document.createElement("hr");
  child2.appendChild(chr);

  var cp=document.createElement("p");
  cp.textContent=c.info;
  child2.appendChild(cp);

}

function education(edu){
  var ehead=document.createElement("h2");
  ehead.textContent="Educational Details";
  child2.appendChild(ehead);

  var chr=document.createElement("hr");
  child2.appendChild(chr);

  let etable=document.createElement("table");
  etable.border="1";

  var tr1="<tr><td>degree</td><td>Institution</td><td>yop</td><td>Percentege</td><tr>";
  var tr2="";
  for(i=0;i<edu.length;i++){
    tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].Institution+"</td><td>"+edu[i].yop+"</td><td>"+edu[i].Percentege+"</td></tr>";

  }
  etable.innerHTML=tr1+tr2;
  child2.appendChild(etable);

}

function skills(skill){
  var shead=document.createElement("h2");
  shead.textContent="Skills";
  child2.appendChild(shead);

  var shr=document.createElement("hr");
  child2.appendChild(shr);

  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for(i=0;i<skill.length;i++){
    var li=document.createElement("li");
    li.textContent=skill[i].title+":"+skill[i].content;
    ul.appendChild(li);
  }
}
