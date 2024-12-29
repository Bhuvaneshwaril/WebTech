let submitBtn = document.getElementById("submitBtn");
    
submitBtn.addEventListener("click", () => {
    let input1 = document.getElementById("input1").value;
    for (i = 1; i <= input1; i++) {
        let cPara = document.createElement("p");
        document.body.append(cPara);
        cPara.setAttribute("id", `para${i}`);
        cPara.setAttribute("class", "para");
        cPara.textContent = `${i}. This is Paragraph`;
    }
    let changeContent = document.createElement("input");
    document.body.append(changeContent);
    changeContent.setAttribute("id", "contentNum")

    let changeContentBtn = document.createElement("input");
    document.body.append(changeContentBtn);
    changeContentBtn.setAttribute("type", "submit");
    changeContentBtn.setAttribute("id", "changeContentSubmitBtn");
    
    let changeContentSubmitBtn = document.getElementById("changeContentSubmitBtn");
    changeContentSubmitBtn.addEventListener("click", () => {
        let contentNum = document.getElementById("contentNum").value
        let pContent = document.getElementById(`para${contentNum}`)
        let cPrompt = prompt("Enter the Content:")
        pContent.textContent = `${contentNum}. ${cPrompt}`
    });
});
