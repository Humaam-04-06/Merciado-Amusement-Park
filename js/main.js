// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 




// --------------------------------------- form logic -----------------------------------------------------------------------------

function myfun() {
    let a = document.getElementById('id1').value.trim();
    let b = document.getElementById('id2').value.trim();
    let c = document.getElementById('id3').value.trim();
    let d = document.getElementById('id4').value;
    let e = document.getElementById('id5').value;

    let namrule = /^[A-Za-z]{3,}$/; 
    let emailrule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    let contrule = /^\d{10}$/; 
    let passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/; 

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("Submit all your data.");
        return false;
    } 
    if (!namrule.test(a)) {
        alert("Error: Name sirf alphabets ho aur kam se kam 3 letters ka ho.");
        return false;
    }
    if (!emailrule.test(b)) {
        alert("Error: Email ka format sahi nahi hai. (e.g. example@xyz.com)");
        return false;
    }
    if (!contrule.test(c)) {
        alert("Error: Contact number sirf 10 digits ka hona chahiye.");
        return false;
    }
    if (!passwordPattern.test(d)) {
        alert("Error: Password must be 8 characters, ek uppercase, ek lowercase, ek number aur ek special character ho.");
        return false;
    }
    if (d !== e) {
        alert("Error: Confirm Password match nahi kar raha.");
        return false;
    }

    alert("Form successfully submitted!");
    return true;
}
