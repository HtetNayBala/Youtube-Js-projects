//Btn with Jquery
// $(".btn").on("click",function(btn){
//     // console.log(btn)
//     let current = $(btn.currentTarget).parentsUntil(".card");
//     current.toggleClass("show-text");
// });


//Question 
let questions = document.querySelectorAll(".question-card");

questions.forEach(function(question){
    // console.log(question);
    let btn = question.querySelector(".btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            console.log(item);
            if(item != question){
                item.classList.remove("show-text");
            }
            // if(item == question){
            //     console.log("True");
            // }
        });
        question.classList.toggle("show-text");
        // console.log(question);
        
    })
})
