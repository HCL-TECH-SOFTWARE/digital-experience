# Troubleshooting and diagnostics tools

A number of tools and resources are available to help you troubleshoot issues and resolve problems while using HCL Digital Experience (DX). If you need further assistance, you can use the tools described here to identify and collect information to help HCL Software Support determine the underlying cause of a problem.

To expedite the resolution of your issue, support will initially ask you the following information:

- Describe how this issue affects your business
    - Set an appropriate case priority
    - Specific target date(s) related to case, such as a go-live or project deadline
    - Number of users affected, frequency of issue, workarounds available

- Provide information about the affected environment/s
    - Type of environment (PROD, AUTH, or UAT)
    - DX version & CF
    - Operating system
    - DX Compose, Container, or Traditional On-Premises
    - Type of cluster (if clustered)
    - Architecture and topology

- Describe the issue in detail
    - Describe what you expect to happen and the actual behavior observed
    - Describe the scope of the problem
    - Describe the number of affected users, portlets, and so on
    - Describe the frequency of the problem
    - Provide screenshots and step-by-step instructions for reproducing the problem
    - Is this an issue that affects all or just one? If not all, what subset is affected?
    - When does the problem happen, and at what stage of the task does it appear?  
    - When did the problem begin?
    - When was the last time it worked successfully?
    - What is the issue pattern? Does it occur on a particular day or time of the week?
    - Have any changes been made to the environment or applications?
    - What troubleshooting steps have already been taken?

!!! tip "RCA Analysis"
      - During the course of resolving an issue, the support organization's primary objective is to restore service to the customer's system. Whenever possible, the engineer will document the cause of the outage in the case record. If the cause of the failure is unknown, and troubleshooting materials collected at the time of failure are not sufficient or unavailable, support will provide the customer with a list of items to collect on the next occurrence.
      - You can engage HCL Services if your organization requires formal Root Cause Analysis (RCA) documentation to assess your deployment, processes and procedures that can be used to prevent future problems.

-   **[Data collection and symptom analysis](tbl_apdt_over.md)**  
Starting with HCL DX version 8.5, you can use a task to collect the configuration wizard logs is available. You can collect data and analyze symptoms of a problem by running a task that can collect and optionally send the data to you. This task is only necessary if the wizard fails before the steps to create the wp\_profile/ConfigEngine instance.
-   **[Portal version and history information](wp_history.md)**  
You can use the HCL DX version and history information tools to gather information about your portal installation.

???+ info "Related information"
    - [Digital Experience Resources](https://support.hcl-software.com/csm?id=dx_support){target="_blank"}
    - [HCLSoftware Support Guide](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0010420){target="_blank"}
