const resultData = [
    { slNo: 1, name: 'Farhan Akhtar', cat: 'S', confidence: 'B', activeSkills: 'B', tradingSkills: 'C', overallGrade: 'C' },
    { slNo: 2, name: 'Aritra Ray', cat: 'S', confidence: 'A', activeSkills: 'A', tradingSkills: 'C', overallGrade: 'B' },
    { slNo: 3, name: 'Tanay Roy', cat: 'S', confidence: 'B', activeSkills: 'C', tradingSkills: 'C', overallGrade: 'D' },
    { slNo: 4, name: 'Md Rasimul Islam', cat: 'S', confidence: 'C', activeSkills: 'A', tradingSkills: 'A', overallGrade: 'A' },
    { slNo: 5, name: 'Sk Anish Md', cat: 'S', confidence: 'B', activeSkills: 'C', tradingSkills: 'A', overallGrade: 'B' },
    { slNo: 6, name: 'Md Rafeh Quershi', cat: 'S', confidence: 'C', activeSkills: 'A', tradingSkills: '-1', overallGrade: '-1' },
    { slNo: 7, name: 'Rik Biswas', cat: 'S', confidence: 'B', activeSkills: 'C', tradingSkills: '-1', overallGrade: '-1' },
    { slNo: 8, name: 'Abhijit Singha', cat: 'S', confidence: 'B', activeSkills: 'C', tradingSkills: 'B', overallGrade: 'B' },
    { slNo: 9, name: 'Debjyoti Pandit', cat: 'J', confidence: 'B', activeSkills: '-1', tradingSkills: '-1', overallGrade: 'Incomplete' },
    { slNo: 10, name: 'Rahul Kumar', cat: 'J', confidence: 'B', activeSkills: 'D', tradingSkills: 'D', overallGrade: 'D' },
    { slNo: 11, name: 'Bipul Das', cat: 'S', confidence: 'C', activeSkills: 'C', tradingSkills: 'D', overallGrade: 'D' },
    { slNo: 12, name: 'Kajol Dutta', cat: 'S', confidence: 'D', activeSkills: 'C', tradingSkills: 'C', overallGrade: 'D' },
    { slNo: 13, name: 'Joydeb Ghosh', cat: 'S', confidence: 'C', activeSkills: 'C', tradingSkills: 'B', overallGrade: 'D' },
    { slNo: 14, name: 'Sharmistha Ghosh', cat: 'S', confidence: 'E', activeSkills: 'C', tradingSkills: 'E', overallGrade: 'E' },
    { slNo: 15, name: 'Tamojit Mandal', cat: 'S', confidence: 'B', activeSkills: 'B', tradingSkills: 'D', overallGrade: 'C' },
    { slNo: 16, name: 'Asif Ekbal', cat: 'J', confidence: 'A', activeSkills: 'B', tradingSkills: '-1', overallGrade: 'Incomplete' },
    { slNo: 17, name: 'Dorian Lysander', cat: 'JX', confidence: 'A', activeSkills: 'C', tradingSkills: 'B', overallGrade: 'C' },
    { slNo: 18, name: 'Nathaniel Charles Bennett', cat: 'SX', confidence: 'A', activeSkills: 'C', tradingSkills: 'C', overallGrade: 'D' },
    { slNo: 19, name: 'Tanmay Ghosh (JACKPOT)', cat: 'S', confidence: 'B', activeSkills: 'C', tradingSkills: '-1', overallGrade: 'Incomplete' },
];


// Function to populate results table
function populateResultsTable() {
    const tableBody = document.querySelector('#results-table tbody');
    resultData.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.slNo}</td>
            <td>${result.name}</td>
            <td>${result.cat}</td>
            <td>${result.confidence}</td>
            <td>${result.activeSkills}</td>
            <td>${result.tradingSkills}</td>
            <td>${result.overallGrade}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to populate feedback section
function populateFeedback() {
    const feedbackList = document.querySelector('#feedback-list');
    feedbackData.forEach(feedback => {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.innerHTML = `
            <h4>${feedback.name}</h4>
            <p><strong>Confidence Level:</strong> ${feedback.confidence}</p>
            <p><strong>Active Skills:</strong> ${feedback.activeSkills}</p>
            <p><strong>Trading Skills:</strong> ${feedback.tradingSkills}</p>
            <p><strong>Overall Grade:</strong> ${feedback.overallGrade}</p>
            <p>${feedback.feedback}</p>
        `;
        feedbackList.appendChild(feedbackDiv);
    });
}

// Call functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    populateResultsTable();
    populateFeedback();
});
