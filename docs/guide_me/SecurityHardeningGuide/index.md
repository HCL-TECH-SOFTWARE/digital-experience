# Security Hardening Guide

Security is a fundamental requirement for most web applications. Organizations often demand detailed accounting of web application security, especially after mainstream media coverage of high-profile vulnerabilities or exploits. This guide instructs architects and administrators on how t- evaluate and improve the security of applications based on HCL Digital Experience.

Security is a broad topic with many aspects t- consider. This can become quite complex when applications integrate with other systems t- deliver a solution. T- conceptually simplify and organize your efforts while evaluating your application, consider these several [fundamental concepts of information security](https://www.cisa.gov/sites/default/files/publications/infosecuritybasics.pdf):

- Authentication

    - What is this?
    
    - Users provide credentials t- identify themselves t- the application.

- Authorization

    - What can they do?

    - Application determines what data the user can access and what functions they can perform on/with that data.

- Non-repudiation

    - What have they done?

    - Establish a record of actions against which user claims can be verified.

- Confidentiality

    - Keep secrets

    - Prevent unauthorized disclosure of data, in storage and in transit.

- Integrity

    - Stop corruption

    - Prevent unauthorized modification of data, in storage and in transit.

- Availability

    - Be reliable
    
    - Ensure that authorized users can access data, when needed.