$("#prox").click(function (e) {
    e.preventDefault()
    const input = document.getElementById("arq")
    const fileName = localStorage.getItem("fileName")

    if (input.files.length == 0) {
        console.log("1")
        document.getElementById("upload").style.display = "none"
        document.getElementById("boletoOk").style.display = "none"
        document.getElementById("boletoFail").style.display = ""
        document.getElementById("prox").style.display = "none"
        document.getElementById("end").style.display = "none"

    }else if(input.files[0].name != (fileName + ".pdf")){
        console.log("2")
        document.getElementById("upload").style.display = "none"
        document.getElementById("boletoOk").style.display = "none"
        document.getElementById("boletoFail").style.display = ""      
        document.getElementById("prox").style.display = "none"  
        document.getElementById("end").style.display = "none"
    }else{
        console.log("3")
        document.getElementById("upload").style.display = "none"
        document.getElementById("boletoOk").style.display = ""
        document.getElementById("boletoFail").style.display = "none"
        document.getElementById("prox").style.display = "none"
        document.getElementById("end").style.display = ""
    }
})

$("#changeArq").click(function (e) {
    e.preventDefault()
    document.getElementById("upload").style.display = ""
    document.getElementById("boletoOk").style.display = "none"
    document.getElementById("boletoFail").style.display = "none"      
    document.getElementById("prox").style.display = ""
    document.getElementById("end").style.display = "none"
})