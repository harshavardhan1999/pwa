function Loadjson(file,callback) {
  var hr = new XMLHttpRequest();
  hr.overrideMimeType("application/json");
  hr.open("GET",file,true);
  hr.onreadystatechange = function() {
    if (hr.readyState === 4 && hr.status == "200") {
      callback(hr.responseText);
    }
  };
  hr.send("null");
}

Loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  basic(data.details);
  Career(data.career);
  edu(data.education);
})

var child1 = document.querySelector(".child1");
function basic(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);
  var name = document.createElement("h1");
  name.textContent = det.name;
  child1.appendChild(name);

  var ph = document.createElement("h3");
  ph.textContent = det.phone;
  child1.appendChild(ph);

  var Mail = document.createElement("a");
  Mail.href = "ramu@gmail.com"
  Mail.textContent = det.email;
  child1.appendChild(Mail);

  var Adds = document.createElement("h4");
  Adds.textContent = "Address:";
  child1.appendChild(Adds);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.address;
  child1.appendChild(p);
}

var child2 = document.querySelector(".child2");
function Career(car) {
  var heading= document.createElement("h2");
  heading.textContent = "Career Objective";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = car.info;
  child2.appendChild(p);
}

function edu(e) {
  var heading = document.createElement("h2");
  heading.textContent = "Eductional Qualification";
  child2.appendChild(heading);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var tab = document.createElement("table");
  tab.border = "5";
  child2.appendChild(tab);

  tabdat="<tr><td>"+"Qualification"+"</td><td>"+"Institute"+"</td><td>"+"Year"+"</td><td>"+"percentage"+"</td></tr>";

  for(i=0;i<e.length;i++){
    tabdat+="<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].year+"</td><td>"+e[i].percentage+"</td></tr>";
  }
    tab.innerHTML = tabdat;
}
//function lodejson(file){
  return new promise((resolve,reject)=>{
  return fetch(file).then(responce=>{
    if(responce.ok){
      resolve(responce.json());
    }else{
      reject(new )
    }
  })
  })
}
//var newfile = lodejon("data.json");
//newfile.thyen(data)
