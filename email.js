function sendmail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    };

const serviceID = "service_79te3yq";
const templateID = "template_j4d1qu4";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        console.log(res);
        alert("the confirmation mail is sent");
    })
.catch(err=>console.log(err));
}
