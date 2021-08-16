seamless.polyfill();

const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.querySelector(".js-form");
    let h2 = document.querySelector(".h2--modal");
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(
        () => {
            h2.innerText = 'You\'re on the list!'
            myForm.innerHTML = '<p class="white confirmation">Thank you for your submission. We will be in touch soon!</p>';
            setTimeout(function () { closeModal() }, 2000);
        }
    ).catch((error) =>
        alert(error)
    )
}
document.querySelector(".js-form").addEventListener("submit", handleSubmit);

// Smooth scroll
document.querySelector(".js-arrow-down").addEventListener("click", function (e) {
    e.preventDefault();
    const offsetTop = document.querySelector('#js-scroll').offsetTop;
    seamless.elementScrollIntoView(
        document.querySelector('#js-scroll'), {
        top: offsetTop,
        behavior: "smooth"
    });
});

const options = {
    threshold: 0.15
};
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
            observer.unobserve(entry.target);
        }
    });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll('.js-animated').forEach(animation => {
    observer.observe(animation);
});

const modal = document.querySelector('.js-modal');
const overlay = document.querySelector('.js-overlay');
const close = document.querySelector('.js-close');
const heroModalLaunch = document.querySelector('.js-hero-modal-launch');
const emailHolder = document.querySelector('.js-email-holder');

document.querySelectorAll('.js-modal-launch').forEach(item => {
    item.addEventListener('click', event => {
        openModal()
    })
})

function heroModal() {
    var email = emailHolder.value;
    document.getElementById('email').value = email;
    openModal()
}

overlay.onclick = function () {
    closeModal()
}

close.onclick = function () {
    closeModal()
}

function openModal() {
    modal.classList.add("active");
    overlay.classList.add("active");
    close.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
    close.classList.remove("active");
    document.body.style.overflow = 'auto';
}