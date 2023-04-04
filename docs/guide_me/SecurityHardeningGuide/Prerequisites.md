# Prerequisites

This guide assumes a general understanding of web application security.

Web application security is:

• Fundamental [information security](https://www.cisa.gov/sites/default/files/publications/infosecuritybasics.pdf) concepts,
• Considered from the perspective of a [web application](https://www.cisa.gov/security-publications/website-security),
• Integrated into a comprehensive security plan via [risk management](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-30r1.pdf).

Web applications are commonly the primary interface by which end users access information. Few are entirely self-contained, but are distinct components of broader, integrated information systems.

Such integrated components comprise a trust chain. Longer trust chains require greater effort to secure. However, the trust boundaries which exist between components can help improve security by providing defense-in-depth – hardening each component can limit the scope and likelihood of any attack.

Each section in this guide introduces a common security requirement for, or security functionality of, HCL Digital Experience. Each section includes a Recommended actions and considerations section to guide you through evaluating and improving the security footing of your application.

Following this guide could require a months-long or open-ended project involving multiple teams that should result in an application-specific security hardening procedure that spans development, deployment, and maintenance. Regularly review this Security Hardening Guide for HCL Digital Experience for updates.

## Recommended actions and considerations

Independently research web application security to identify other resources to inform your evaluation. Especially consider:

◦ [OWASP](https://owasp.org/www-project-top-ten/)
    ▪ [Top 10](https://owasp.org/www-project-top-ten/)
    ▪ [Secure Coding](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)
    ▪ [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
    ▪ [Proactive Controls](https://owasp.org/www-project-proactive-controls/)
    ▪ [Secure Development Lifecycle](https://owasp.org/www-project-samm/)

◦ [National Institute of Standards and Technology](https://www.nist.gov)
    ▪ [National Vulnerability Database](https://nvd.nist.gov)
    ▪ [Computer Security Resource Center](https://csrc.nist.gov)

◦ [MDN – HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
◦ [Google Browser Security Handbook](https://code.google.com/archive/p/browsersec/wikis/Main.wiki)
◦ [Google Web Security Fundamentals](https://web.dev/secure/)
◦ [Cybersecurity and Infrastructure Security Agency](https://www.cisa.gov)
    ▪ [Information Security](https://www.cisa.gov/sites/default/files/publications/infosecuritybasics.pdf)

◦ [European Union Agency for Cybersecurity](https://www.enisa.europa.eu)
◦ [Web Application Hacker’s Handbook](https://www.oreilly.com/library/view/the-web-application/9781118026472/)