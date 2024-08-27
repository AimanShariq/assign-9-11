function calculateGrade() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);

    const obtainedMarks = subject1 + subject2 + subject3;
    const percentage = (obtainedMarks / totalMarks) * 100;

    let grade = '';
    let remarks = '';

    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'You Need Improvement';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'satisfactory';
    } else if (percentage >= 60) {
        grade = 'D';
        remarks = 'sorry';
    } else if (percentage >= 60) {
        grade = 'E';
        remarks = 'Fail';
    } 

    document.getElementById('result').innerHTML = `
        <p>Total Marks: ${totalMarks}</p>
        <p>Marks Obtained: ${obtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Remarks: ${remarks}</p>
    `;
}
