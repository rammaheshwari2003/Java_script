// document.getElementById('btn1').addEventListener('click',myfun);

// function myfun(){
//     alert("Welcome friends !!");
// }



document.getElementById('btn1').addEventListener('click',cal);

function cal(){
        let p=Number(document.getElementById('phy').value);
        let c=Number(document.getElementById('che').value);
        let m=Number(document.getElementById('math').value);
        let e=Number(document.getElementById('eng').value);
        let h=Number(document.getElementById('hnd').value);

        let totalmarks=p+c+m+e+h;
        
        let per=totalmarks*100/500;

        document.getElementById('ans1').innerHTML="Total Marks: "+totalmarks;
        document.getElementById('ans2').innerHTML="Percentage: "+per+"%";
}