var dataForm
var inputs

$("#newBank").click(function () {
    document.getElementById("addPopup").style.display = ""
})

$("#addButton").click(function (e) {
    e.preventDefault()
    const bankName = document.getElementById("bankName").value
    const account = document.getElementById("account").value
    const agency = document.getElementById("agency").value

    if (bankName != "" && account != "" && agency != "") {

        const bankDiv = document.createElement("div")
        bankDiv.classList.toggle("bank")

        const bankInfoDiv = document.createElement("div")
        bankInfoDiv.classList.toggle("bankInfo")

        const bankLogoDiv = document.createElement("div")
        bankLogoDiv.classList.toggle("bankLogo")


        const pName = document.createElement("p")
        const nameLabel = document.createElement("strong")

        const nameLabelText = document.createTextNode("Nome: ")
        nameLabel.appendChild(nameLabelText)

        pName.appendChild(nameLabel)
        const bankNameText = document.createTextNode(bankName)
        pName.appendChild(bankNameText)


        const pAccount = document.createElement("p")
        const accountLabel = document.createElement("strong")

        const accountLabelText = document.createTextNode("Conta: ")
        accountLabel.appendChild(accountLabelText)

        pAccount.appendChild(accountLabel)
        const bankAccount = document.createTextNode(account)
        pAccount.appendChild(bankAccount)


        const pAgency = document.createElement("p")
        const agencyLabel = document.createElement("strong")

        const agencyLabelText = document.createTextNode("Agência: ")
        agencyLabel.appendChild(agencyLabelText)

        pAgency.appendChild(agencyLabel)
        const bankAgency = document.createTextNode(agency)
        pAgency.appendChild(bankAgency)


        bankInfoDiv.appendChild(pName)
        bankInfoDiv.appendChild(pAccount)
        bankInfoDiv.appendChild(pAgency)


        var bankLogo = document.createElement('img')
        bankLogo.classList.toggle("width")
        bankLogo.setAttribute("width", "70px")
        bankLogo.src = '../assets/itau.png'

        bankLogoDiv.appendChild(bankLogo)


        bankDiv.appendChild(bankInfoDiv)
        bankDiv.appendChild(bankLogoDiv)

        document.getElementById("bankOptions").appendChild(bankDiv)

        document.getElementById("bankName").value = ""
        document.getElementById("account").value = ""
        document.getElementById("agency").value = ""
        document.getElementById("error").style.display = "none"
        document.getElementById("addPopup").style.display = "none"

    } else {
        document.getElementById("error").style.display = ""
    }
})

$("#cancelButton").click(function () {
    document.getElementById("bankName").value = ""
    document.getElementById("account").value = ""
    document.getElementById("agency").value = ""
    document.getElementById("error").style.display = "none"
    document.getElementById("addPopup").style.display = "none"
})

$(".bank").click(function (e) {
    var chosenBank = {
        name: "",
        accountNumber: "",
        accountDigit: "",
        agencyNumber: "",
        agencyDigit: ""
    }

    chosenBankName = e.target.children[0].children[0].innerText
    chosenBank.name = chosenBankName.substring(6, chosenBankName.length)

    chosenAccountNumber = e.target.children[0].children[1].innerText
    chosenBank.accountNumber = chosenAccountNumber.substring(7, chosenAccountNumber.length)
    chosenBank.accountDigit = chosenAccountNumber[chosenAccountNumber.length - 1]

    chosenAgencyNumber = e.target.children[0].children[2].innerText
    chosenBank.agencyNumber = chosenAgencyNumber.substring(9, chosenAgencyNumber.length)
    chosenBank.agencyDigit = chosenAgencyNumber[chosenAgencyNumber.length - 1]

    localStorage.setItem("chosenBank", chosenBank)
    document.getElementById("banks").style.display = "none"
    document.getElementById("data").style.display = ""

})

$("#next").click(function (e) {
    e.preventDefault()

    var flag = 0

    dataForm = document.getElementById('data')
    inputs = dataForm.getElementsByTagName('input')

    for (index = 0; index < inputs.length; ++index) {
        if(inputs[index].value == ""){
            flag = 1
        }
    }

    if(flag == 0){
        const fileName = document.getElementById("dataCedCPF").value
        localStorage.setItem("fileName", fileName)
        window.location.href = "../form-boleto.html"
    }else{
        document.getElementById("erro").style.display = ""
    }
})

$("#downloadBoleto").click(function (e) {
    e.preventDefault()
    const fileName = localStorage.getItem("fileName")
    console.log(fileName)

    var doc = new jsPDF();
    doc.save(fileName + '.pdf');
})


