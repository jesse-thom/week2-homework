document.addEventListener("DOMContentLoaded", function(){  
        var imageArray = [
            "https://i.guim.co.uk/img/media/d153b6dfc4507a7c07cbb7f8c9e03c71fc5ec207/223_0_3500_2100/master/3500.jpg?width=1020&quality=85&auto=format&fit=max&s=c3978bb2ac943def076a43918c12a4da",
            "https://www.hollywoodreporter.com/wp-content/uploads/2015/12/goticonicimages06.jpg?w=1024",
            "https://www.hollywoodreporter.com/wp-content/uploads/2015/12/got-iconic-images-18_2.jpg?w=1024",

        ];


        var imageArrayIndex = 0;
        
        var leftButton = document.querySelector("#leftButton");
        var rightButton = document.querySelector("#rightButton");
        var imageHolder = document.getElementById("imageHolder");

        //src = imageArray[0]
        imageHolder.src = imageArray[imageArrayIndex];

        rightButton.addEventListener('click', function(){
            if(imageArrayIndex < imageArray.length - 1){
                imageArrayIndex++; //increment 0 to 1
                imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[1]
            }
            else{
                console.log("Out of Bounds on right button!")
            }
        })
        
        leftButton.addEventListener('click', function(){
            if(imageArrayIndex > 0){
                imageArrayIndex--; //increment 1 to 0
                imageHolder.src = imageArray[imageArrayIndex]; // src = imageArray[0]
            }
            else{
                console.log("Out of Bounds on left button!")

            }
        })
        
        
        
        
    })