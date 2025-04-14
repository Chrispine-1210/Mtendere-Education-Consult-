const universities = [
    { name: "University of Oxford", country: "UK", course: "MBA", score: 9 },
    { name: "Harvard University", country: "USA", course: "Computer Science", score: 10 },
    { name: "Technical University of Munich", country: "Germany", course: "Engineering", score: 8 },
    { name: "University of Melbourne", country: "Australia", course: "Biotech", score: 7 },
    { name: "Khalifa University", country: "UAE", course: "AI", score: 6 },
];

function sortUniversities(data) {
    return data.sort((a, b) => b.score - a.score);
}

function applyFilters() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const country = document.getElementById("countryFilter").value;

    let filtered = universities.filter(u =>
        (u.name.toLowerCase().includes(search) || u.course.toLowerCase().includes(search)) &&
        (country === "" || u.country === country)
    );

    renderUniversities(sortUniversities(filtered));
}

function renderUniversities(list) {
    const container = document.getElementById("universityList");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p class='text-center'>No results found.</p>";
        return;
    }

    list.forEach(u => {
        container.innerHTML += `
            <div class="col-md-4">
                <div class="university-card p-3 shadow rounded">
                    <h5>${u.name}</h5>
                    <p><strong>Course:</strong> ${u.course}</p>
                    <p><strong>Country:</strong> ${u.country}</p>
                    <a href="#" class="btn btn-outline-primary mt-2">Apply</a>
                </div>
            </div>
        `;
    });
}

renderUniversities(sortUniversities(universities));

document.getElementById("searchInput").addEventListener("input", applyFilters);
document.getElementById("countryFilter").addEventListener("change", applyFilters);

document.getElementById('courseSearch').addEventListener('input', function () {
    const search = this.value.toLowerCase();
    const rows = document.querySelectorAll('#courseTable tbody tr');

    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(search) ? '' : 'none';
    });
});

const universityData = {
    chandigarh: {
        intakes: ["January", "July"],
        programs: ["Engineering", "Business", "IT", "Hospitality"],
        documents: "Passport, Academic Transcript, English Proficiency (IELTS 6.0+)"
    },
    parul: {
        intakes: ["February", "September"],
        programs: ["Medicine", "Physiotherapy", "Engineering", "Design"],
        documents: "Transcript, Passport, Medical Certificate"
    },
    ct: {
        intakes: ["January", "July", "November"],
        programs: ["Applied Sciences", "Agriculture", "Media"],
        documents: "Transcript, Passport, Proof of English"
    },
    shoolini: {
        intakes: ["March", "August"],
        programs: ["Pharmacy", "Biotech", "Liberal Arts"],
        documents: "60%+ in core subjects, English Proof, ID"
    },
    jain: {
        intakes: ["January", "June", "October"],
        programs: ["Sports Science", "Aviation", "Engineering"],
        documents: "GPA ≥ 2.5, English Test, Passport Copy"
    }
};

const universitySelect = document.getElementById("university");
const intakeSelect = document.getElementById("intakeMonth");
const programSelect = document.getElementById("program");
const documentsField = document.getElementById("documents");

universitySelect.addEventListener("change", function () {
    const selected = this.value;
    const data = universityData[selected];
    intakeSelect.innerHTML = "";
    programSelect.innerHTML = "";
    if (data) {
        data.intakes.forEach(month => {
            const option = document.createElement("option");
            option.value = month;
            option.textContent = month;
            intakeSelect.appendChild(option);
        });

        data.programs.forEach(program => {
            const option = document.createElement("option");
            option.value = program;
            option.textContent = program;
            programSelect.appendChild(option);
        });

        documentsField.value = data.documents;
    } else {
        documentsField.value = "";
    }
});

function knapsackCourseSelection(userPreferences, courses) {
    // TODO: Implement smarter filtering or optimization logic
    return courses.length ? courses[0] : null;
}

// Modal and Form Logic
document.getElementById("applicationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your application has been submitted!");
    this.reset();
    document.getElementById("formModal").style.display = "none";
});

document.getElementById("openFormBtn").onclick = () => {
    document.getElementById("formModal").style.display = "block";
};

document.getElementById("closeFormBtn").onclick = () => {
    document.getElementById("formModal").style.display = "none";
};

window.onclick = e => {
    if (e.target === document.getElementById("formModal")) {
        document.getElementById("formModal").style.display = "none";
    }
};

document.getElementById("applyBtn").addEventListener("click", () => {
    document.getElementById("formModal").style.display = "block";

    const userPreferences = {
        budget: 50000,
        goals: ["Job", "Networking"],
        duration: 6,
        courseSelection: true
    };

    const selected = universitySelect.value;
    const selectedCourse = selected ? knapsackCourseSelection(userPreferences, universityData[selected].programs) : null;

    if (selectedCourse) {
        alert(`Selected course: ${selectedCourse}`);
    } else {
        alert("No suitable course found.");
    }

    return false;
});