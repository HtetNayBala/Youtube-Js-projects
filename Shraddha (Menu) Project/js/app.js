//Main Data
let data = [{
    id : 1,
    img : "image/Shraddha-hd-10.jpg",
    header : "Morning Shraddha",
    para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, minus?",
    time : "morning",
},{
    id : 2,
    img : "image/Shraddha-hd-12.jpg",
    header : "Evening Shraddha",
    para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, minus?",
    time : "evening",
},{
    id : 3,
    img : "image/Shraddha-hd-13.jpg",
    header : "Night Shraddha",
    para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, minus?",
    time : "night",
}];

//Get requirements
let myCard = document.querySelector(".myCard");
let allBtn = document.querySelector(".all");
let morningBtn = document.querySelector(".morning");
let eveningBtn = document.querySelector(".evening");
let nightBtn = document.querySelector(".night");

data.forEach(function(item,index){
   
    myCard.innerHTML += `<div class="col-12 col-md-4 main">
                            <div class="card mt-5 p-0 border-0 overflow-hidden">
                                <div class="card-body p-0" time="${item.time}">
                                    <div>
                                        <img src="${item.img}" class="w-100" style="height:350px" alt="">
                                        <div class="header mb-0 h4 p-1">
                                            ${item.header}
                                        </div>
                                        <div class="content p-1">
                                            <p class="para mb-0">
                                                ${item.para}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`    

});

let cardBody = document.querySelectorAll(".card-body");


cardBody.forEach(function(item,index){
    
    let itemAttr = item.getAttribute('time');
    //by custom attribute 
    //attr catch and then, item no equal hide
    //if equal show
    allBtn.addEventListener("click",function(){
      item.style.display = "block"  
    });
    morningBtn.addEventListener("click",function(){
        item.style.display="";
         if(itemAttr!='morning'){
                item.style.display = "none"
            } 
    });
    eveningBtn.addEventListener("click",function(){
        item.style.display = "";
        if(itemAttr!='evening'){
            item.style.display = "none";
        }
    });
    nightBtn.addEventListener("click",function(){
        item.style.display = "";
        if(itemAttr!='night'){
            item.style.display = "none";
        }
    });
    
})

   