var questions = document.querySelectorAll('.question');
var images = document.querySelectorAll('.question p img');
var answers = document.querySelectorAll('.answer');
var after = document.getElementsByClassName('questions-after');
var before = document.getElementsByClassName('questions-before');
questions.forEach(function(question,index){
    if(index < questions.length){
        questions[index].addEventListener("click",function(){
            var path = images[index].src;
            var currentURL = path.substr(path.lastIndexOf('/') + 1);
            if(currentURL == "arrow-down.svg"){
                images.forEach(function(img){
                    img.src = "images/arrow-down.svg";
                });
                images[index].src = "images/arrow-up.svg";
            }
            else{
                images[index].src = "images/arrow-down.svg";
            }
            var answer = answers[index];
            if ($(answer).is(':hidden')) {
                answers.forEach(function(answerindex){
                    $(answerindex).slideUp(400);
                });
                $(answer).slideDown(400);
                if(window.innerWidth>1200){
                    $(after).animate({height:'38rem'}, 400)
                    $(before).animate({height:'31rem',bottom:'-1rem'}, 400)
                }
            }else{
                $(answer).slideUp(400);
                if(window.innerWidth>1200){
                    $(after).animate({height:'35rem'}, 400)
                    $(before).animate({height:'28rem',bottom:'2rem'}, 400)
                }
            }
        });
    }
    else{
        console.log("not found")
    }
})