var addBtn, uname, q1, userid, q2, q3, q4, q5, score;

score = 0;

addBtn = document.getElementById("addBtn");


const database = firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    userid = document.getElementById("fname").value;
    uname = document.getElementById("fname").value;
    q1 = document.getElementById("q1").value;
    q2 = document.getElementById("q2").value;
    q3 = document.getElementById("q3").value;
    q4 = document.getElementById("q4").value;
    q5 = document.getElementById("q5").value;

    if (q1.toLowerCase() === "no"){
        score++;
        console.log("Q1 correct")
    }

    if (q2.toLowerCase() === "sas"|| q2.toLowerCase() === "sss" || q2.toLowerCase() === "rhs"){
        score++;
        console.log("Q2 Correct")
    } 

    


    if (q3.toLowerCase() === "no"){
        score++;
        console.log("Q3 correct")
    }

    if (q4.toLowerCase() === "yes"){
        score++;
        console.log("Q4 correct")
    }

    if (q5.toLowerCase() === "yes"){
        score++;
        console.log("Q5 correct")
    }
    
    




    database.ref('/users/userid'+userid).set({
        name: uname,
        score: score,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5
    });
});