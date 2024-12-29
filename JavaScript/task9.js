let grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click", (e) => {
    let trg = e.target;
    console.log(trg )
    let para = document.getElementsByClassName("para");
    console.log(para);
    let sp = document.getElementsByClassName("span");
    for (i = 0; i < para.length; i++){
        console.log(trg == para[i])
        if (trg == para[i]){
            sp[i].style.display = "inline"
            para[i].style.display = "none"
        }
    }
});