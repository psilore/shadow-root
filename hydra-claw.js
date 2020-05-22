// hydra-claw.js

const template = document.createElement('template')
template.innerHTML = `
  <style>
  :host {
    --blue: #a9e7ff;
    --green: #9cffa9;
    --violet: #ff82ea;
    color: rgba(61, 81, 90, 0.74);
  }
  /* Nomalize */
  h2 {
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-weight: normal;
  }
  p {
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  button {
    border-color: #fff;
    border-style: solid;
    border-width: 1px;
    padding: 0;
  }
  button:focus {
    outline:none;
  }

  /* Global */
  button {
    filter: brightness(70%);
    -webkit-appearance: none;
  }
  button:focus {
    outline-style: solid;
    outline-color: rgba(156, 198, 236, 0.25);
    outline-width: medium;
  }
  #area {
    margin: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  #area {
    display: grid;
    grid-template-areas: "top-left top-right" "bottom-left bottom-right";
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
  } 
  .top-left {
    grid-area: top-left;
  }
  .top-right {
    grid-area: top-right;
  }
  .bottom-left {
    grid-area: bottom-left;
  }
  .bottom-right {
    grid-area: bottom-right;
  }
  #content {
    height: 100%;
    width: 100%;
  }
  .banner {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .dimensions {
    height: 470px;
    width: 350px;
  }
  .position-top-left {
    position: absolute;
    top: 0;
    left: 0;
  }
  .position-top-right {
    position: absolute;
    top: 0;
    right: 0;
  }
  .position-bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .position-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--green, grey);
    padding: 0 .6em;
    height: 56px;
  }
  .header p {
    width: 100%;
    text-align: center;
    margin-left: 32px;
  }
  .nav-button {
    display: block;
    width: 32px;
    height: 32px;
    margin-top: 12px;
    margin-bottom: 12px;
    background-color:  var(--green, grey);
    border-color:  var(--green, grey);
    border-style: solid;
    border-width: 1px;
    padding: 0;
  }
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    background-color: var(--blue, grey);
    padding: 0 1.5em;
    height: calc(100% - 112px);
  }
  .footer {
    height: 56px;
    background-color: var(--violet, grey);
    padding: 0 .6em;
  }
  .footer-button {
    display: block;
    width: 144px;
    height: 32px;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
    background-color:  var(--violet, grey);
    border-color:  var(--violet, grey);
    border-style: solid;
    border-width: 1px;
    padding: 0;
  }
  @media only screen and (max-width: 736px) {
    #area {
      display: block;
    }
    .dimensions {
      height: 100%;
      width: 100%;
      overflow: auto;
    }
  }
  </style>
  <div id="area">
    <div id="content">
      <div id="banner" class="banner dimensions position-bottom-right">
        <div class="header">
        <p>Hydra claw box</p>
        <nav>
          <button class="nav-button"></button>
        </nav>
        </div>
        <div class="main">
          <h2>Scratching the title</h2>
          <p>Uppsetting the lair will make the hydra to be in unrest.</p>
          <p>The hydra needs it sleep, now it is not the time for mischief.</p>
        </div>
        <div class="footer">
          <button class="footer-button"></button>
        </div>
      </div>
    </div>
  </div>
`;

customElements.define('hydra-claw', class HydraClaw extends HTMLElement {

  static get observedAttributes() {
    return ['disabled', 'open', 'position', 'floating'];
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }
  get position() {
    return this.hasAttribute('position');
  }

  set position(val) {
    if (val) {
      this.setAttribute('position', '');
    } else {
      this.removeAttribute('position');
    }
  }

  get floating() {
    return this.hasAttribute('floating');
  }

  set floating(val) {
    if (val) {
      this.setAttribute('floating', '');
    } else {
      this.removeAttribute('floating');
    }
  }

  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector)
  }

  constructor() {
    super()
    this.appendStyles = this.appendStyles.bind(this)
    const root = this.attachShadow({ mode: 'open' })
    root.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    //this.appendStyles()
    //this.loadStyles('./hydra-claw.css')
    this.setAttribute('position', 'bottom-right');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const content = this.shadowRoot.querySelector('#content')
    const banner = this.shadowRoot.querySelector('#banner')
    switch (newValue) {
      case "top-left": {
        content.classList = ''
        content.classList.add(newValue)
        banner.classList = 'banner dimensions'
        banner.classList.add('position-top-left')
        break;
      }
      case "top-right": {
        content.classList = ''
        content.classList.add(newValue)
        banner.classList = 'banner dimensions'
        banner.classList.add('position-top-right')
        break;
      }
      case "bottom-left": {
        content.classList = ''
        content.classList.add(newValue)
        banner.classList = 'banner dimensions'
        banner.classList.add('position-bottom-left')
        break;
      }
      case "bottom-right": {
        content.classList = ''
        content.classList.add(newValue)
        banner.classList = 'banner dimensions'
        banner.classList.add('position-bottom-right')
        break;
      }
    }
  }

  loadStyles(stylesURL) {
    return new Promise(function (resolve, reject) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylesURL;
      document.head.appendChild(link);
      link.onload = function () {
        resolve();
      };
    });
  }

  appendStyles(event) {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.innerHTML =
      'singe-flame {' +
      'margin: 0;' +
      'width: 100vw;' +
      'height: 100vh;' +
      'position: fixed;' +
      'top: 0;' +
      'left: 0;' +
      '}' +
      '.grid {' +
      'display: grid;' +
      'grid-template-areas: "top-left top-right" "bottom-left bottom-right";' +
      'grid-template-rows: 50% 50%;' +
      'grid-template-columns: 50% 50%;' +
      '}' +
      '@media only screen and (max-width: 736px) {' +
      '.grid {' +
      'display: block;' +
      'width: 100vw;' +
      'height: 100vh;' +
      '}' +
      '}'
    head.appendChild(style);
  }
});