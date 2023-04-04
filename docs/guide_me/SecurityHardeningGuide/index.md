# Security Hardening Guide

Security is a fundamental requirement for most web applications. Organizations often demand detailed accounting of web application security, especially after mainstream media coverage of high-profile vulnerabilities or exploits. This guide instructs architects and administrators on how to evaluate and improve the security of applications based on HCL Digital Experience.

Security is a broad topic with many aspects to consider. This can become quite complex when applications integrate with other systems to deliver a solution. To conceptually simplify and organize your efforts while evaluating your application, consider these several [fundamental concepts of information security](https://www.cisa.gov/sites/default/files/publications/infosecuritybasics.pdf):

- Authentication

    o Who is this?
    o Users provide credentials to identify themselves to the application.

- Authorization

    o What can they do?
    o Application determines what data the user can access and what functions they can perform on/with that data.

- Non-repudiation

    o What have they done?
    o Establish a record of actions against which user claims can be verified.

- Confidentiality

    o Keep secrets
    o Prevent unauthorized disclosure of data, in storage and in transit.

- Integrity

    o Stop corruption
    o Prevent unauthorized modification of data, in storage and in transit.

- Availability

    o Be reliable
    o Ensure that authorized users can access data, when needed.