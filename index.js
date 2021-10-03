document.addEventListener("DOMContentLoaded", function(){  
    var imageArray = [
        "https://upload.wikimedia.org/wikipedia/commons/8/89/Charles_Bond_Park_1.JPG",
        "https://www.cityofpasadena.net/parks-and-rec/wp-content/uploads/sites/33/Singer-Park-.jpg",
        "https://www.portland.gov/sites/default/files/styles/banner_2_1_640w/public/2020-04/woodstock-park-path.jpg?itok=ngEPVfDH",
​
    ];
​
​
    var imageArrayIndex = 0;
    
    var leftButton = document.querySelector("#leftButton");
    var rightButton = document.querySelector("#rightButton");
    var imageHolder = document.getElementById("imageHolder");
​
    //src = imageArray[0]
    imageHolder.src = imageArray[imageArrayIndex];
​
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
​
        }
    })
    
    
    
    
})