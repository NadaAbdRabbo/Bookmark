//GLOBAL
var sitename = document.getElementById("sitename");
var siteurl = document.getElementById("siteurl");
var error = document.getElementById("error");
var errorurl = document.getElementById("errorurl");


var webList;


if(localStorage.getItem("webList") == null){
    webList = [];
} else {
    webList = JSON.parse(localStorage.getItem("webList"));
    // console.log(webList);
    display(webList);
}




function submit(){

    if (validateName() && validateUrl() === true) {

   
    var web = {
        name: sitename.value,
        url:siteurl.value
    } 
    webList.push(web);
    display(webList);
    clearForm();
    localStorage.setItem("webList",JSON.stringify(webList));
    } else {
    //   console.log("invalid Error");
    }

}


function clearForm(){
    sitename.value = "";
    siteurl.value = "";
}


function display(site){
    var cartona = ``;
    for (var i = 0; i < site.length; i ++ ){
        cartona += `<tr>
        <td>${i +1}</td>
        <td>${site[i].name}</td>
        <td>
            <button onclick="visitWeb(${i})" class="btn btn-v text-white btn-small"><i class="fa-solid fa-eye"></i> Visit</button>
        </td>
        <td>
            <button onclick="deleteWeb(${i})" class="btn btn-d text-white btn-small"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </td>
    </tr>`
    }
    document.getElementById("tBody").innerHTML = cartona;
}


function deleteWeb(index){
    webList.splice(index,1);
    localStorage.setItem("webList",JSON.stringify(webList));
    display(webList);
}


function validateName(){
    var regex = /^[a-z]{3,10}$/;
    if (regex.test(sitename.value) === true){
        error.classList.replace("d-block","d-none")
        sitename.classList.add("is-valid");
        sitename.classList.remove("is-invalid");
      return true 
    } else {
        error.classList.replace("d-none","d-block")
        sitename.classList.add("is-invalid");
        sitename.classList.remove("is-valid");
        return false
    }   
}

function validateUrl(){
    var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (regex.test(siteurl.value) === true){
        errorurl.classList.replace("d-block","d-none")
        siteurl.classList.add("is-valid");
        siteurl.classList.remove("is-invalid");
      return true 
    } else {
        errorurl.classList.replace("d-none","d-block")
        siteurl.classList.add("is-invalid");
        siteurl.classList.remove("is-valid");
        return false
    }  
}