function getNewContent() {
    let request = getHttpObject();
    if(request){
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if(request.readyState==4){
                let para = document.createElement("p");
                let txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById('new').appendChild(para);
            }
        }
        request.send(null);
    }else{
        alert("sry, don\'t support!");
    }
}
addLoadEvent(getNewContent);