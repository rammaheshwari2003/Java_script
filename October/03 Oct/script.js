document.getElementById("btn1").addEventListener("click", DataSave);
document.getElementById("btn2").addEventListener("click", DataDisplay);
let api="http://localhost:3000/student";
function DataSave(){
    let rollno=document.getElementById("rno").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;

   
    fetch(api,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
    body: JSON.stringify({
        "rollno":rollno,
        "name":name,
        "city":city,
        "fees":fees
    })
    }).then((res)=>{
        alert("Data Save");
    })
}


async function DataDisplay(){
        let Mydata="";
        
        const myObj=await fetch(api);
        const Data=await myObj.json();

        Data.map((key)=>{
            Mydata+= `<h1> RollNo: ${key.rollno} </h1>
            <h1> Name: ${key.name} </h1>
            <h1> Address: ${key.city} </h1>
            <h1> Fees: ${key.fees} </h1>
            `
        })
        
        document.getElementById('demo').innerHTML=Mydata;
}