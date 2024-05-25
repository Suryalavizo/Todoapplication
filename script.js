function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthdate.getFullYear();
    const month = currentDate.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = `Your age is ${age} years old`;
}