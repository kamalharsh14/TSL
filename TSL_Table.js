function w3_open() {
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.width = "16.3rem";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function clearallinputsfortable1() {
    document.getElementById("rem1").value = "";
    document.getElementById("rem2").value = "";
    document.getElementById("rem3").value = "";
    document.getElementById("rem4").value = "";
    document.getElementById("rem5").value = "";
    document.getElementById("desc1").value = "";
    document.getElementById("desc2").value = "";
    document.getElementById("desc3").value = "";
    document.getElementById("desc4").value = "";
    document.getElementById("desc5").value = "";
    document.getElementById("spdesc1").innerHTML = "";
    document.getElementById("spdesc2").innerHTML = "";
    document.getElementById("spdesc3").innerHTML = "";
    document.getElementById("spdesc4").innerHTML = "";
    document.getElementById("spdesc5").innerHTML = "";
    document.getElementById("cb11").checked = false;
    document.getElementById("cb12").checked = false;
    document.getElementById("cb21").checked = false;
    document.getElementById("cb22").checked = false;
    document.getElementById("cb31").checked = false;
    document.getElementById("cb32").checked = false;
    document.getElementById("cb41").checked = false;
    document.getElementById("cb42").checked = false;
    document.getElementById("cb51").checked = false;
    document.getElementById("cb52").checked = false;
}

function clearallinputsfortable2() {
    document.getElementById("phasein1").value = "";
    document.getElementById("phasein2").value = "";
    document.getElementById("phasein3").value = "";
    document.getElementById("phasein4").value = "";
    document.getElementById("currentin1").value = '';
    document.getElementById("currentin2").value = '';
    document.getElementById("currentin3").value = '';
    document.getElementById("currentin4").value = '';
    document.getElementById("R1").value = '';
    document.getElementById("R2").value = '';
    document.getElementById("R3").value = '';
    document.getElementById("R4").value = '';
    document.getElementById("Y1").value = '';
    document.getElementById("Y2").value = '';
    document.getElementById("Y3").value = '';
    document.getElementById("Y4").value = '';
    document.getElementById("B1").value = '';
    document.getElementById("B2").value = '';
    document.getElementById("B3").value = '';
    document.getElementById("B4").value = '';
    document.getElementById("N1").value = '';
    document.getElementById("N2").value = '';
    document.getElementById("N3").value = '';
    document.getElementById("N4").value = '';
    document.getElementById("spcurrentin1").innerHTML = '';
    document.getElementById("spcurrentin2").innerHTML = '';
    document.getElementById("spcurrentin3").innerHTML = '';
    document.getElementById("spcurrentin4").innerHTML = '';
    document.getElementById("spR1").innerHTML = '';
    document.getElementById("spR2").innerHTML = '';
    document.getElementById("spR3").innerHTML = '';
    document.getElementById("spR4").innerHTML = '';
    document.getElementById("spY1").innerHTML = '';
    document.getElementById("spY2").innerHTML = '';
    document.getElementById("spY3").innerHTML = '';
    document.getElementById("spY4").innerHTML = '';
    document.getElementById("spB1").innerHTML = '';
    document.getElementById("spB2").innerHTML = '';
    document.getElementById("spB3").innerHTML = '';
    document.getElementById("spB4").innerHTML = '';
    document.getElementById("spN1").innerHTML = '';
    document.getElementById("spN2").innerHTML = '';
    document.getElementById("spN3").innerHTML = '';
    document.getElementById("spN4").innerHTML = '';


}

function clearallinputsfortable3() {
    document.getElementById("cp1").value = "";
    document.getElementById("st1").value = "";
    document.getElementById("re1").value = "";
    document.getElementById("cp2").value = "";
    document.getElementById("st2").value = "";
    document.getElementById("re2").value = "";
    document.getElementById("cp3").value = "";
    document.getElementById("st3").value = "";
    document.getElementById("re3").value = "";
    document.getElementById("spst1").innerHTML = "";
    document.getElementById("spre1").innerHTML = "";
    document.getElementById("spst2").innerHTML = "";
    document.getElementById("spre2").innerHTML = "";
    document.getElementById("spst3").innerHTML = "";
    document.getElementById("spre3").innerHTML = "";
}

{
    function numericvalidationforcurrentin1() {
        var num = document.getElementById("currentin1").value;
        if (num > 0 && num < 101) {
            document.getElementById("spcurrentin1").innerHTML = "";
            // document.getElementById("currentin1").style.color = "green";
        } else {
            document.getElementById("spcurrentin1").innerHTML = "*Invalid";
            document.getElementById("spcurrentin1").style.color = "red";
        }
    }

    function numericvalidationforcurrentin2() {
        var num = document.getElementById("currentin2").value;
        if (num > 0 && num < 101) {
            document.getElementById("spcurrentin2").innerHTML = "";
            // document.getElementById("currentin2").style.color = "green";
        } else {
            document.getElementById("spcurrentin2").innerHTML = "*Invalid";
            document.getElementById("spcurrentin2").style.color = "red";
        }
    }

    function numericvalidationforcurrentin3() {
        var num = document.getElementById("currentin3").value;
        if (num > 0 && num < 101) {
            document.getElementById("spcurrentin3").innerHTML = "";
            // document.getElementById("currentin3").style.color = "green";
        } else {
            document.getElementById("spcurrentin3").innerHTML = "*Invalid";
            document.getElementById("spcurrentin3").style.color = "red";
        }
    }

    function numericvalidationforcurrentin4() {
        var num = document.getElementById("currentin4").value;
        if (num > 0 && num < 101) {
            document.getElementById("spcurrentin4").innerHTML = "";
            // document.getElementById("currentin4").style.color = "green";
        } else {
            document.getElementById("spcurrentin4").innerHTML = "*Invalid";
            document.getElementById("spcurrentin4").style.color = "red";
        }
    }

    function numericvalidationforR1() {
        var num = document.getElementById("R1").value;
        if (num > 0 && num < 101) {
            document.getElementById("spR1").innerHTML = "";
            // document.getElementById("R1").style.color = "green";
        } else {
            document.getElementById("spR1").innerHTML = "*Invalid";
            document.getElementById("spR1").style.color = "red";
        }
    }

    function numericvalidationforR2() {
        var num = document.getElementById("R2").value;
        if (num > 0 && num < 101) {
            document.getElementById("spR2").innerHTML = "";
            // document.getElementById("R2").style.color = "green";
        } else {
            document.getElementById("spR2").innerHTML = "*Invalid";
            document.getElementById("spR2").style.color = "red";
        }
    }

    function numericvalidationforR3() {
        var num = document.getElementById("R3").value;
        if (num > 0 && num < 101) {
            document.getElementById("spR3").innerHTML = "";
            // document.getElementById("R3").style.color = "green";
        } else {
            document.getElementById("spR3").innerHTML = "*Invalid";
            document.getElementById("spR3").style.color = "red";
        }
    }

    function numericvalidationforR4() {
        var num = document.getElementById("R4").value;
        if (num > 0 && num < 101) {
            document.getElementById("spR4").innerHTML = "";
            // document.getElementById("R4").style.color = "green";
        } else {
            document.getElementById("spR4").innerHTML = "*Invalid";
            document.getElementById("spR4").style.color = "red";
        }
    }

    function numericvalidationforY1() {
        var num = document.getElementById("Y1").value;
        if (num > 0 && num < 101) {
            document.getElementById("spY1").innerHTML = "";
            // document.getElementById("Y1").style.color = "green";
        } else {
            document.getElementById("spY1").innerHTML = "*Invalid";
            document.getElementById("spY1").style.color = "red";
        }
    }

    function numericvalidationforY2() {
        var num = document.getElementById("Y2").value;
        if (num > 0 && num < 101) {
            document.getElementById("spY2").innerHTML = "";
            // document.getElementById("Y2").style.color = "green";
        } else {
            document.getElementById("spY2").innerHTML = "*Invalid";
            document.getElementById("spY2").style.color = "red";
        }
    }

    function numericvalidationforY3() {
        var num = document.getElementById("Y3").value;
        if (num > 0 && num < 101) {
            document.getElementById("spY3").innerHTML = "";
            // document.getElementById("Y3").style.color = "green";
        } else {
            document.getElementById("spY3").innerHTML = "*Invalid";
            document.getElementById("spY3").style.color = "red";
        }
    }

    function numericvalidationforY4() {
        var num = document.getElementById("Y4").value;
        if (num > 0 && num < 101) {
            document.getElementById("spY4").innerHTML = "";
            // document.getElementById("Y4").style.color = "green";
        } else {
            document.getElementById("spY4").innerHTML = "*Invalid";
            document.getElementById("spY4").style.color = "red";
        }
    }

    function numericvalidationforB1() {
        var num = document.getElementById("B1").value;
        if (num > 0 && num < 101) {
            document.getElementById("spB1").innerHTML = "";
            // document.getElementById("B1").style.color = "green";
        } else {
            document.getElementById("spB1").innerHTML = "*Invalid";
            document.getElementById("spB1").style.color = "red";
        }
    }

    function numericvalidationforB2() {
        var num = document.getElementById("B2").value;
        if (num > 0 && num < 101) {
            document.getElementById("spB2").innerHTML = "";
            // document.getElementById("B2").style.color = "green";
        } else {
            document.getElementById("spB2").innerHTML = "*Invalid";
            document.getElementById("spB2").style.color = "red";
        }
    }

    function numericvalidationforB3() {
        var num = document.getElementById("B3").value;
        if (num > 0 && num < 101) {
            document.getElementById("spB3").innerHTML = "";
            // document.getElementById("B3").style.color = "green";
        } else {
            document.getElementById("spB3").innerHTML = "*Invalid";
            document.getElementById("spB3").style.color = "red";
        }
    }

    function numericvalidationforB4() {
        var num = document.getElementById("B4").value;
        if (num > 0 && num < 101) {
            document.getElementById("spB4").innerHTML = "";
            // document.getElementById("B4").style.color = "green";
        } else {
            document.getElementById("spB4").innerHTML = "*Invalid";
            document.getElementById("spB4").style.color = "red";
        }
    }

    function numericvalidationforN1() {
        var num = document.getElementById("N1").value;
        if (num > 0 && num < 101) {
            document.getElementById("spN1").innerHTML = "";
            // document.getElementById("N1").style.color = "green";
        } else {
            document.getElementById("spN1").innerHTML = "*Invalid";
            document.getElementById("spN1").style.color = "red";
        }
    }

    function numericvalidationforN2() {
        var num = document.getElementById("N2").value;
        if (num > 0 && num < 101) {
            document.getElementById("spN2").innerHTML = "";
            // document.getElementById("N2").style.color = "green";
        } else {
            document.getElementById("spN2").innerHTML = "*Invalid";
            document.getElementById("spN2").style.color = "red";
        }
    }

    function numericvalidationforN3() {
        var num = document.getElementById("N3").value;
        if (num > 0 && num < 101) {
            document.getElementById("spN3").innerHTML = "";
            // document.getElementById("N3").style.color = "green";
        } else {
            document.getElementById("spN3").innerHTML = "*Invalid";
            document.getElementById("spN3").style.color = "red";
        }
    }

    function numericvalidationforN4() {
        var num = document.getElementById("N4").value;
        if (num > 0 && num < 101) {
            document.getElementById("spN4").innerHTML = "";
            // document.getElementById("N4").style.color = "green";
        } else {
            document.getElementById("spN4").innerHTML = "*Invalid";
            document.getElementById("spN4").style.color = "red";
        }
    }
}

{
    function charactervalidationforst1() {
        var char = document.getElementById("st1").value;
        var reg = /^[A-Za-z]+$/;
        if (char == 'Y' || char == 'N' || char == 'y' || char == 'n') {
            document.getElementById("spst1").innerHTML = "";
        } else {
            document.getElementById("spst1").innerHTML = "*Invalid";
            document.getElementById("spst1").style.color = "red";
        }
    }

    function charactervalidationforst2() {
        var char = document.getElementById("st2").value;
        var reg = /^[A-Za-z]+$/;
        if (char == 'Y' || char == 'N' || char == 'y' || char == 'n') {
            document.getElementById("spst2").innerHTML = "";
        } else {
            document.getElementById("spst2").innerHTML = "*Invalid";
            document.getElementById("spst2").style.color = "red";
        }
    }

    function charactervalidationforst3() {
        var char = document.getElementById("st3").value;
        var reg = /^[A-Za-z]+$/;
        if (char == 'Y' || char == 'N' || char == 'y' || char == 'n') {
            document.getElementById("spst3").innerHTML = "";

        } else {
            document.getElementById("spst3").innerHTML = "*Invalid";
            document.getElementById("spst3").style.color = "red";
        }
    }

    function stringvalidationforre1() {
        var ch = document.getElementById("re1").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spre1").innerHTML = "";
        } else {
            document.getElementById("spre1").innerHTML = "*Invalid";
            document.getElementById("spre1").style.color = "red";
        }
    }

    function stringvalidationforre2() {
        var ch = document.getElementById("re2").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spre2").innerHTML = "";
        } else {
            document.getElementById("spre2").innerHTML = "*Invalid";
            document.getElementById("spre2").style.color = "red";
        }
    }

    function stringvalidationforre3() {
        var ch = document.getElementById("re3").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spre3").innerHTML = "";
        } else {
            document.getElementById("spre3").innerHTML = "*Invalid";
            document.getElementById("spre3").style.color = "red";
        }
    }
}

{
    function stringvalidationfordesc1() {
        var ch = document.getElementById("desc1").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spdesc1").innerHTML = "";
        } else {
            document.getElementById("spdesc1").innerHTML = "*Invalid";
            document.getElementById("spdesc1").style.color = "red";
        }
    }

    function stringvalidationfordesc2() {
        var ch = document.getElementById("desc2").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spdesc2").innerHTML = "";
        } else {
            document.getElementById("spdesc2").innerHTML = "*Invalid";
            document.getElementById("spdesc2").style.color = "red";
        }
    }

    function stringvalidationfordesc3() {
        var ch = document.getElementById("desc3").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spdesc3").innerHTML = "";
        } else {
            document.getElementById("spdesc3").innerHTML = "*Invalid";
            document.getElementById("spdesc3").style.color = "red";
        }
    }

    function stringvalidationfordesc4() {
        var ch = document.getElementById("desc4").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spdesc4").innerHTML = "";
        } else {
            document.getElementById("spdesc4").innerHTML = "*Invalid";
            document.getElementById("spdesc4").style.color = "red";
        }
    }

    function stringvalidationfordesc5() {
        var ch = document.getElementById("desc5").value;
        var reg = /^[A-Za-z\s]*$/;
        if (reg.test(ch)) {
            document.getElementById("spdesc5").innerHTML = "";
        } else {
            document.getElementById("spdesc5").innerHTML = "*Invalid";
            document.getElementById("spdesc5").style.color = "red";
        }
    }
}

function savetable1() {
    let table1 = {
        "jsontable1": [{
                "Sno": 1,
                "Description": document.getElementById("desc1").value,
                "Status": document.getElementById("cb11").checked,
                "Applicability": document.getElementById("cb12").checked,
                "Remarks": document.getElementById("rem1").value
            },
            {
                "Sno": 2,
                "Description": document.getElementById("desc2").value,
                "Status": document.getElementById("cb21").checked,
                "Applicability": document.getElementById("cb22").checked,
                "Remarks": document.getElementById("rem2").value
            }, {
                "Sno": 3,
                "Description": document.getElementById("desc3").value,
                "Status": document.getElementById("cb31").checked,
                "Applicability": document.getElementById("cb32").checked,
                "Remarks": document.getElementById("rem3").value
            },
            {
                "Sno": 4,
                "Description": document.getElementById("desc4").value,
                "Status": document.getElementById("cb41").checked,
                "Applicability": document.getElementById("cb42").checked,
                "Remarks": document.getElementById("rem4").value
            },
            {
                "Sno": 5,
                "Description": document.getElementById("desc5").value,
                "Status": document.getElementById("cb51").checked,
                "Applicability": document.getElementById("cb52").checked,
                "Remarks": document.getElementById("rem5").value
            }
        ]
    }
    console.log(table1);
}

function savetable2() {
    let table2 = {
        "jsontable2": [{
                "Phase": document.getElementById("phasein1").value,
                "Current Injected(A)": document.getElementById("currentin1").value,
                "R": document.getElementById("R1").value,
                "Y": document.getElementById("Y1").value,
                "B": document.getElementById("B1").value,
                "N": document.getElementById("N1").value
            },
            {
                "Phase": document.getElementById("phasein2").value,
                "Current Injected(A)": document.getElementById("currentin2").value,
                "R": document.getElementById("R2").value,
                "Y": document.getElementById("Y2").value,
                "B": document.getElementById("B2").value,
                "N": document.getElementById("N2").value
            },
            {
                "Phase": document.getElementById("phasein3").value,
                "Current Injected(A)": document.getElementById("currentin3").value,
                "R": document.getElementById("R3").value,
                "Y": document.getElementById("Y3").value,
                "B": document.getElementById("B3").value,
                "N": document.getElementById("N3").value
            },
            {
                "Phase": document.getElementById("phasein4").value,
                "Current Injected(A)": document.getElementById("currentin4").value,
                "R": document.getElementById("R4").value,
                "Y": document.getElementById("Y4").value,
                "B": document.getElementById("B4").value,
                "N": document.getElementById("N4").value
            }
        ]
    }
    console.log(table2);
}

function savetable3() {
    let table3 = {
        "jsontable3": [{
            "SNo": 1,
            "Check Points": document.getElementById("cp1").value,
            "Status(Y/N)": document.getElementById("st1").value,
            "Remarks": document.getElementById("re1").value
        }, {
            "SNo": 2,
            "Check Points": document.getElementById("cp2").value,
            "Status(Y/N)": document.getElementById("st2").value,
            "Remarks": document.getElementById("re2").value
        }, {
            "SNo": 3,
            "Check Points": document.getElementById("cp3").value,
            "Status(Y/N)": document.getElementById("st3").value,
            "Remarks": document.getElementById("re3").value
        }]
    }
    console.log(table3);
}