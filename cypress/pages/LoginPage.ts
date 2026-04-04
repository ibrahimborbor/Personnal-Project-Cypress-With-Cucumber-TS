export class LoginPage {
  private readonly selectors = {
    // Login page structure
    layout: ".orangehrm-login-layout",
    slot: ".orangehrm-login-slot",
    heading: "h5",

    // Authentication form fields/actions
    usernameInput: "input[name='username']",
    passwordInput: "input[name='password']",
    loginButton: "button[type='submit']",
    csrfToken: "input[name='_token'][type='hidden']",

    // Informational blocks on login page
    demoCredentials: ".orangehrm-demo-credentials",
    forgotPassword: ".orangehrm-login-forgot-header",
    brandingImage: "img[alt='company-branding']",
    logoImage: "img[alt='orangehrm-logo']",

    // Validation and footer sections
    validationError: "span.oxd-input-field-error-message",
    invalidCredentials: "p",
    socialLink: ".orangehrm-login-footer-sm a",
    copyright: ".orangehrm-copyright",
  };

  visit(): void {
    cy.visit("/web/index.php/auth/login");
  }

  assertOnLoginRoute(): void {
    cy.url().should("include", "/web/index.php/auth/login");
  }

  assertInputsVisible(): void {
    cy.get(this.selectors.usernameInput).should("be.visible");
    cy.get(this.selectors.passwordInput).should("be.visible");
  }

  assertLoginButtonVisible(): void {
    cy.get(this.selectors.loginButton).contains("Login").should("be.visible");
  }

  assertLayoutVisible(): void {
    cy.get(this.selectors.layout).should("be.visible");
    cy.get(this.selectors.slot).should("be.visible");
  }

  assertHeadingVisible(): void {
    cy.contains(this.selectors.heading, "Login").should("be.visible");
  }

  assertCsrfTokenExists(): void {
    cy.get(this.selectors.csrfToken).should("exist");
  }

  assertDemoCredentialsVisible(): void {
    cy.get(this.selectors.demoCredentials)
      .should("contain.text", "Username : Admin")
      .and("contain.text", "Password : admin123");
  }

  assertForgotPasswordVisible(): void {
    cy.contains(this.selectors.forgotPassword, /forgot\s+your\s+password\??/i).should(
      "be.visible",
    );
  }

  assertBrandingImageVisible(): void {
    cy.get(this.selectors.brandingImage).should("be.visible");
  }

  assertLogoVisible(): void {
    cy.get(this.selectors.logoImage).its("length").should("be.gte", 1);
  }

  submit(): void {
    cy.get(this.selectors.loginButton).contains("Login").click();
  }

  login(username: string, password: string): void {
    cy.get(this.selectors.usernameInput).clear().type(username);
    cy.get(this.selectors.passwordInput).clear().type(password, { log: false });
    this.submit();
  }

  assertRequiredFieldErrors(minCount = 2): void {
    cy.get(this.selectors.validationError)
      .filter(":visible")
      .should(($messages) => {
        const requiredCount = [...$messages].filter((message) =>
          (message.textContent ?? "").includes("Required"),
        ).length;

        expect(requiredCount).to.be.gte(minCount);
      });
  }

  assertInvalidCredentialsVisible(): void {
    cy.contains(this.selectors.invalidCredentials, "Invalid credentials").should(
      "be.visible",
    );
  }

  assertSocialLinkExists(expectedHref: string): void {
    cy.get(this.selectors.socialLink)
      .filter((_, anchor) => {
        const href = anchor.getAttribute("href") ?? "";
        return href.includes(expectedHref);
      })
      .should("have.length", 1)
      .first()
      .should("have.attr", "target", "_blank");
  }

  assertVersionTextVisible(): void {
    cy.contains(this.selectors.copyright, /OrangeHRM OS/i).should("be.visible");
  }

  assertCopyrightTextVisible(): void {
    cy.contains(this.selectors.copyright, /OrangeHRM, Inc/i).should("be.visible");
  }
}

export const loginPage = new LoginPage();
