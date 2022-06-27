const wrapper = document.createElement('div');

wrapper.innerHTML = `
<div class="contact-wrapper">
    <div class="contact-panel">
        <div class="contact-panel__header">
            Contact
        </div>

        <button class="contact-close">
            <i class="fa fa-times"></i>
        </button>

        <ul>
            <li>
                <a href="https://bungferry.my.id" target="_blank">
                    <i class="fa fa-link"></i>
                </a>
            </li>

            <li>
                <a href="https://www.facebook.com/bungferry.wa" target="_blank">
                    <i class="fa fa-facebook"></i>
                </a>
            </li>

            <li>
                <a href="https://www.twitter.com/bungferry__" target="_blank">
                    <i class="fa fa-twitter"></i>
                </a>
            </li>

            <li>
                <a href="https://www.instagram.com/bungferry__" target="_blank">
                    <i class="fa fa-instagram"></i>
                </a>
            </li>
        </ul>
    </div>
</div>

<button class="contact-button">
    Get in Touch
</button>
`;
document.body.appendChild(wrapper);
const contactButton = document.querySelector('.contact-button');
const contactClose = document.querySelector('.contact-close');
const contactWrapper = document.querySelector('.contact-wrapper');

contactButton.addEventListener('click', () => {
  contactWrapper.classList.toggle('contact-wrapper--open')
});

contactClose.addEventListener('click', () => {
  contactWrapper.classList.remove('contact-wrapper--open')
});
