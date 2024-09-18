const titleElement = document.querySelector('.title');
const originalTitle = titleElement.innerHTML.trim(); // Store the original heading content

const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {
    let Total_Lecture = parseInt(document.querySelector('#Total_Lecture').value);
    let Total_Delegation = parseInt(document.querySelector('#Total_Delegation').value);
    let Total_absent = parseInt(document.querySelector('#Total_Absent').value);
    let Year = parseInt(document.querySelector('#Year').value);

    // Check if Total_Lecture is empty or zero
    if (!Total_Lecture) {
        alert('Please fill out the Total Lecture input field with a valid value.');
        return;
    }

    // Check if Year is not within the range of 1 to 4
    if (Year < 1 || Year > 4) {
        alert('Please enter a valid Year between 1 and 4.');
        return;
    }


    if(Total_absent > Total_Lecture || Total_Delegation > Total_Lecture){
        alert('Incorrect Data');
        return;
    }
    if(Total_Delegation>Total_absent){
        alert('Incorrect Data');
        return;
    }
 let m = Total_absent-Total_Delegation;
 let s =m/Total_Lecture;
 let v= s*100;
    let Attendance = 100 - v;
    Attendance = Attendance.toFixed(2);
    console.log(Attendance);
    document.querySelector('#result').textContent = Attendance;
    let status = '';

    Attendance = parseFloat(Attendance); 

    
    if (Attendance === 100 && Total_Delegation <= 0) {
        status += ' Congratulations! You are eligible for the exam and will get a prize of 5000.';
        document.getElementById('emoji').innerHTML = '😄'; // Happy emoji
    } else if (Attendance === 100 && Total_Delegation > 0) {
        status += ' You are eligible for the exam, but you are not eligible for the prize due to delegation.';
        document.getElementById('emoji').innerHTML = '😄'; // Happy emoji
    } else if (Attendance >= 97 && Total_Delegation <= 0 && Year === 4) {
        status += ' Congratulations! You will get a prize of 3000.';
        document.getElementById('emoji').innerHTML = '😄'; // Happy emoji
    } else if (Attendance < 95 && Year === 4) {
        status += ' You are not eligible for the placement drive.';
        document.getElementById('emoji').innerHTML = '😔'; // Sad emoji
    } else if (Attendance < 75) {
        status += ' Sorry, you are not eligible.';
        document.getElementById('emoji').innerHTML = '😔'; // Sad emoji
    } else if (Attendance < 90) {
        status += ' You are not eligible for the exam. Please pay the fine to become eligible.';
        document.getElementById('emoji').innerHTML = '😔'; // Sad emoji
    } else {
        status += ' Congratulations! You are eligible.';
        document.getElementById('emoji').innerHTML = '😄'; // Happy emoji
    }

    
    document.querySelector('#comment').textContent = status;
    titleElement.innerHTML = originalTitle;
});
