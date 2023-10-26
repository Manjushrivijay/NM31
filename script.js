document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.resume-section');
    let currentSectionIndex = 0;

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    showSection(currentSectionIndex);

    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');
    const viewResumeButton = document.getElementById('viewResumeButton'); // Add this line

    backButton.addEventListener('click', function () {
        currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
        showSection(currentSectionIndex);
    });

    nextButton.addEventListener('click', function () {
        currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        showSection(currentSectionIndex);
    });

    // Add an event listener for the "View Resume" button
    viewResumeButton.addEventListener('click', function () {
        const resumeImage = document.getElementById('resumeImage');
        resumeImage.style.display = 'block';
    });
});
