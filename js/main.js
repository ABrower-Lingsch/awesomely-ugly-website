// this is the function that actually changes the image
function changeImage(){
        var img = document.getElementById("image"); 
        // the above locates the original image by using its id, below is the source of the new picture
        img.src="http://photos1.blogger.com/blogger/761/1659/1600/budgetts%20frog_jacobs-ecology1co1uk.jpg";
        return false;
}


        const button = document.querySelector(".morefrog");
//   this moves the click event into JavaScript instead of using onclick in HTML
        button.addEventListener("click", changeImage);

       