
//  for(var i=0; i<30; i++){
//     var div=document.createElement("div");
//     div.innerHTML="this is div";
//     document.body.append(div);
//  }



// 1. use the inbuild method called create element

// var division=document.createElement("div");
// console.log(division);
// //<div></div>
// // here in above statements the elements are in double quotes

// // 2. adding the content inside the html tag
// // innerHTML is a propoerty to add the contents for the above method

// division.innerHTML="this is div"
// //<div>   this is div </div>
// // 3. add the created elements dynamically for the webpage
// document.body.append(division);


// var paragraph=document.createElement("p");
// console.log(paragraph);
// paragraph.innerHTML="paragraph of the body"
// document.body.append(paragraph); 

// var division=document.createElement("div");
// division.innerHTML="this is div";
// //adding inline css to the above element
// division.style.backgroundColor="green";
// division.style.textAlign="center";
// // adding the attribute
// division.setAttribute("class","main");

// var div=document.createElement("div");
// div.innerHTML="this is another div";
// div.setAttribute("class","main1");
// // Append can take multiple values  
// document.body.append(division, div);

// var parent=document.createElement("div");
// var child=document.createElement("div");
// child.innerHTML="this is child";  
// parent.append(child);
// document.body.append(parent);


// var div1=document.createElement("div");
// div1.setAttribute("class", "container");
// var div2=document.createElement("div");
// div2.setAttribute("class", "row");
// var div3=document.createElement("div");
// div3.setAttribute("class", "col");


// div2.append(div3);
// div1.append(div2);
// document.body.append(div1);



  ///ignore this///
// var container=document.createElement("div");
// var attr=document.createAttribute("class");
// attr.value="main";
// container.setAttributeNode(attr);
// document.body.append(container); 


// var div=document.createElement("div");
// div.className="main";
// div.id="main1";
// document.body.append(div);

// <button type="button" class="btn btn-primary">Primary</button> just try to type this.

// var div=document.createElement("div");
// // div.classList.add("btn","btn-primary");
// div.setAttribute("class", "btn","btn-primary");

// document.body.append(div);


// function zoo(){
//     var responce=document.getElementById("mail").value;
// console.log(responce);
// }


function zoo(){
    var responce=document.getElementById("First Name").value;
console.log(responce);


    var responce=document.getElementById("Middle Name").value;
console.log(responce);

    var responce=document.getElementById("Middle Name").value;
console.log(responce);

var responce=document.getElementById("mail").value;
console.log(responce);

}


