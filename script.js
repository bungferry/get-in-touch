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
                <a href="https://markodenic.com" target="_blank">
                    <i class="fa fa-link"></i>
                </a>
            </li>

            <li>
                <a href="https://www.getrevue.co/profile/denicmarko" target="_blank">
                    <i class="fa fa-envelope-o"></i>
                </a>
            </li>

            <li>
                <a href="https://www.youtube.com/channel/UCRgyPAKycnp_kkpny_uZBcQ" target="_blank">
                    <i class="fa fa-youtube"></i>
                </a>
            </li>

            <li>
                <a href="https://github.com/markodenic" target="_blank">
                    <i class="fa fa-github"></i>
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
