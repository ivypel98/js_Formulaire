function afficher() {
    let name = document.getElementById("nom");
    let email = document.getElementById("email");
    let noter = document.getElementById("noter");
    let coach = document.getElementById("coach");
    let experience = document.getElementById("experience");


    let username = document.querySelector(".username");
    let user_mail = document.querySelector(".user_mail");
    let user_coach = document.querySelector(".user_coach");
    let user_experience = document.querySelector(".user_experience");
    let user_note = document.querySelector(".user_note");


    username.innerHTML = name.value;
    user_mail.innerHTML = email.value;
    user_note.innerHTML = noter.value;
    user_coach.innerHTML = coach.value;
    user_experience.innerHTML = experience.value;

}

