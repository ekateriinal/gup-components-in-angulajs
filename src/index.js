import angular from "angular";

class MyComp {
  constructor($document, $element, $scope, $timeout) {
    this.$document = $document;
    this.$element = $element;
    this.$scope = $scope;
    this.$timeout = $timeout;
  }

  $onInit() {
    this.$timeout(() => {
      const continueButton = this.$element[0].querySelector(
        'gup-button[appearance="primary"]'
      );
      const gupInputField = this.$element[0].querySelector(
        'gup-input-field[name="your-message"]'
      );

      if (gupInputField) {
        const validateMobileNumber = (value) => {
          const mobilePattern = /^\+968[0-9]{8}$/;
          return mobilePattern.test(value);
        };
        gupInputField.addEventListener("gup-input", (event) => {
          const mobileNumber = event.detail;
          if (validateMobileNumber(mobileNumber)) {
            continueButton.removeAttribute("disabled");
          } else {
            continueButton.setAttribute("disabled", "true");
          }
        });
      }
    });
  }
}

angular.module("app", []).component("myComp", {
  controller: ["$document", "$element", "$scope", "$timeout", MyComp],
  template: `
      <section class="form-template">
  <header class="header">
    <nav class="wizard-bar">
      <div class="wizard-container">
        <a class="wizard-action" href="#">
          <gup-icon icon-name="clear" height="20" width="20"></gup-icon>
          <span class="wizard-label">Save & exit</span>
        </a>
        <a class="wizard-action" href="#">
          <gup-icon icon-name="help" height="20" width="20"></gup-icon>
          <span class="wizard-label">Do you need help?</span>
        </a>
      </div>
    </nav>
    <div class="service-header">
      <div class="service-content">
        <h1 class="service-title">Service name</h1>
      </div>
    </div>
  </header>

  <main class="form-wrapper">
    <div class="form-column">
      <div class="form-step">
        <div class="step-indicator">
          <div class="step-link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0309ea95d6fbdf8ba314f9caac8cc1eec0836383ca4db8af1af9377b71a22315?placeholderIfAbsent=true&apiKey=dfb9bf0bf20a436cb1b34cc30fc2e4a7"
              alt=""
              class="wizard-icon"
            />
            <span class="step-number">Step 2 of 5</span>
          </div>
        </div>
        <div class="step-header">
          <h2 class="step-title">Step title</h2>
          <p class="step-description">
            Placeholder for step description. Below is example form.
          </p>
        </div>
      </div>

      <form class="form-container">
        <gup-track gap="4" direction="vertical">
          <dl class="form-group">
            <gup-track gap="2" direction="vertical">
              <dt class="form-label">Name</dt>
              <dd>Name</dd>
            </gup-track>
          </dl>
          <dl class="form-group">
            <gup-track gap="2" direction="vertical">
              <dt class="form-label">Civil ID</dt>
              <dd>180375</dd>
            </gup-track>
          </dl>
          <gup-input-field
            type="tel"
            name="your-message"
            placeholder="+96812345678"
            pattern="\\+968[0-9]{8}"
          >
            Mobile Number
          </gup-input-field>
        </gup-track>
      </form>
    </div>
  </main>

  <footer class="form-footer">
    <div class="footer-container">
      <div class="footer-buttons">
        <gup-button appearance="secondary" kind="button" type="button">
          Cancel
          <gup-icon
            slot="icon-start"
            icon-name="arrow-back"
            height="20"
            width="20"
          ></gup-icon>
        </gup-button>
      </div>
      <div class="footer-buttons">
        <gup-button kind="button" type="button" appearance="primary" disabled>
          Continue
          <gup-icon
            slot="icon-end"
            icon-name="arrow-back"
            height="20"
            width="20"
            class="arrow-back"
          ></gup-icon>
        </gup-button>
      </div>
    </div>
  </footer>
</section>
    `,
});
