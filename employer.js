document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".profile-pic img");
    const companyName = document.querySelector(".intro h2");
    const aboutText = document.querySelector(".about .content");
    const aboutTextArea = document.createElement("textarea");
    aboutTextArea.value = aboutText.textContent;
    const companyNameInput = document.createElement("input");
    companyNameInput.value = companyName.textContent;

    const editProfilePicBtn = document.getElementById("edit-profile-pic");
    editProfilePicBtn.addEventListener("click", function () {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = e => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = readerEvent => {
                profilePic.src = readerEvent.target.result;
            };
        };

        input.click();
    });

    const changeCompanyNameBtn = document.getElementById("change-company-name");
    changeCompanyNameBtn.addEventListener("click", function () {
        const editBtnText = changeCompanyNameBtn.textContent;
        if (editBtnText === "Change Company Name") {
            changeCompanyNameBtn.textContent = "Save Changes";
            companyName.style.display = "none";
            companyNameInput.style.display = "block";
            document.querySelector(".intro").appendChild(companyNameInput);
            companyNameInput.focus();
        } else {
            changeCompanyNameBtn.textContent = "Change Company Name";
            companyName.textContent = companyNameInput.value;
            companyName.style.display = "block";
            companyNameInput.style.display = "none";
            companyNameInput.remove();
        }
    });

    const editAboutSectionBtn = document.getElementById("change-about");
    editAboutSectionBtn.addEventListener("click", function () {
        const editBtnText = editAboutSectionBtn.textContent;
        if (editBtnText === "Edit") {
            editAboutSectionBtn.textContent = "Save Changes";
            aboutText.style.display = "none";
            aboutTextArea.style.display = "block";
            document.querySelector(".about").appendChild(aboutTextArea);
            aboutTextArea.focus();
        } else {
            editAboutSectionBtn.textContent = "Edit";
            aboutText.textContent = aboutTextArea.value;
            aboutText.style.display = "block";
            aboutTextArea.style.display = "none";
            aboutTextArea.remove();
        }
    });

    const editBenefitsSectionBtn = document.getElementById("change-benefit");
    editBenefitsSectionBtn.addEventListener("click", function () {
        const editBtnText = editBenefitsSectionBtn.textContent;
        if (editBtnText === "Edit") {
            editBenefitsSectionBtn.textContent = "Save Changes";
            aboutText.style.display = "none";
            aboutTextArea.style.display = "block";
            document.querySelector(".benefits").appendChild(benefitTextArea);
            aboutTextArea.focus();
        } else {
            editBenefitsSectionBtn.textContent = "Edit";
            aboutText.textContent = aboutTextArea.value;
            aboutText.style.display = "block";
            aboutTextArea.style.display = "none";
            aboutTextArea.remove();
        }
    });
});



////////////////////////////////////////////////////////////////////////////////


const jobs = [
    {
        id: 1,
        title: 'Web Developer',
        company: 'ABC Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Developer',
        specialist_level: 'Junior',
        job_type: 'Part Time',
        location: 'Yerevan',
        applyLink: 'apply_link1'
    },
    {
        id: 2,
        title: 'Backend Developer',
        company: 'ABC Inc.',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Backend Developer',
        specialist_level: 'Beginner',
        job_type: 'Full Time',
        location: 'Gyumri',
        applyLink: 'apply_link2'
    },
    {
        id: 3,
        title: 'Content Developer',
        company: 'ABC Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Developer',
        specialist_level: 'Junior',
        job_type: 'Part Time',
        location: 'Yerevan',
        applyLink: 'apply_link3'
    },
    {
        id: 4,
        title: 'yehha Developer',
        company: 'ABC Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Developer',
        specialist_level: 'Junior',
        job_type: 'Part Time',
        location: 'Yerevan',
        applyLink: 'apply_link4'
    },
    {
        id: 5,
        title: 'Web Developer',
        company: 'ABC Inc.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        category: 'Web Developer',
        specialist_level: 'Junior',
        job_type: 'Part Time',
        location: 'Yerevan',
        applyLink: 'apply_link5'
    },
];

document.addEventListener('DOMContentLoaded', function () {
    displayJobs(jobs);
    initSlider();
});

function initSlider() {
    const sliderContainer = document.querySelector('.posted_jobs .slider-container');
    const slides = document.querySelectorAll('.posted_jobs .slides .slide');

    let currentIndex = 0;

    showSlide(slides, currentIndex);

    const nextArrow = document.querySelector('.next-arrow');
    nextArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(slides, currentIndex);
    });

    const prevArrow = document.querySelector('.prev-arrow');
    prevArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(slides, currentIndex);
    });
}

function showSlide(slides, index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function displayJobs(jobs) {
    const slidesContainer = document.querySelector('.posted_jobs .slides');

    jobs.forEach(job => {
        const jobSlide = document.createElement('div');
        jobSlide.classList.add('slide');
        jobSlide.innerHTML = `
            <h3>${job.title}</h3>
            <p>Company: ${job.company}</p>
            <p>Description: ${job.description}</p>
            <p>Category: ${job.category}</p>
            <p>Specialist Level: ${job.specialist_level}</p>
            <p>Job Type: ${job.job_type}</p>
            <p>Location: ${job.location}</p>
            <a href="${job.applyLink}" target="_blank">Apply</a>
        `;
        slidesContainer.appendChild(jobSlide);
    });
}
 ////////////////////////////////////////////////////////////////////////////


