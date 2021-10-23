$('input[type=radio][name=convenio]').on('change', function () {
    switch ($(this).val()) {
        case 'sim':
            document.getElementById('question2').style.display = "inherit"
            document.getElementById('error1').style.display = "none"
            break
        case 'nao':
            document.getElementById('error1').style.display = "inherit"
            document.getElementById('question2').style.display = "none"
            break
    }
});

$('input[type=radio][name=registro]').on('change', function () {
    switch ($(this).val()) {
        case 'sim':
            document.getElementById('question3').style.display = "inherit"
            document.getElementById('error2').style.display = "none"
            document.getElementById('sideMenu').style.height = "125vh"
            break
        case 'nao':
            document.getElementById('error2').style.display = "inherit"
            document.getElementById('question3').style.display = "none"
            break
    }
});

$(".checkbox").on('change', function () {
    if (document.getElementById("questionOne").checked) {
        if (document.getElementById("questionTwo").checked) {
            if (document.getElementById("questionThree").checked) {
                document.getElementById("next").style.display = "initial"
            } else {
                document.getElementById("next").style.display = "none"
            }
        } else {
            document.getElementById("next").style.display = "none"
        }
    } else {
        document.getElementById("next").style.display = "none"
    }
});