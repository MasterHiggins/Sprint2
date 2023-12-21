// JavaScript program to find data in data.json
// December 17th, 2023
// Written by Christopher Higgins

// Getting data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log("JSON data:", data);

        // Getting record
        data.forEach(record => {
            for (const key in record) {
                console.log(`${key}: ${record[key]}`);
                break;
            }
        });

        // Getting names
        function getNamesString() {
            return data.map(record => record.name).join(', ');
        }
    
        function getAgesString() {
            return data.map(record => record.age).join(', ');
        }
    
        function getStudentCount() {
            return data.filter(record => record.isStudent).length;
        }
    
        // Displaying results
        document.body.innerHTML += `<p>Names: ${getNamesString()}</p>`;
        document.body.innerHTML += `<p>Ages: ${getAgesString()}</p>`;
        document.body.innerHTML += `<p>Number of students: ${getStudentCount()}</p>`;
    
        console.log("Names:", getNamesString());
        console.log("Ages:", getAgesString());
        console.log("Number of students:", getStudentCount());
    })