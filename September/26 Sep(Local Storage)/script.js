document.getElementById("setbtn").addEventListener("click",dataset);
document.getElementById("getbtn").addEventListener("click",dataget);
document.getElementById("clr").addEventListener("click",clearData);

function dataset(){
    let firstNm=document.getElementById("fnm").value;
    let lastfNm=document.getElementById("lnm").value;

    window.localStorage.setItem("firstName",firstNm);
    window.localStorage.setItem("lastName",lastfNm);
    alert("Your data set in local storage!");
}
function dataget(){
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("lastName");
    document.getElementById("ans").innerHTML="Hi i am "+myfnm+" "+mylnm+" from Bhopal !";
}
function clearData(){
    window.localStorage.clear();
    alert("Local storage clear !");
}