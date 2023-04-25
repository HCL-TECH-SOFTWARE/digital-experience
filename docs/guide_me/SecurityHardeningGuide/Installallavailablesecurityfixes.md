# Install all available security fixes

HCL Software is committed to the safety and security of all our products and services. The [HCL Software Product Security Incident Response Team](https://www.hcltechsw.com/resources/psirt) (PSIRT) is a global team that manages the investigation and coordination of security vulnerability information related to HCL Software offerings. This team will coordinate with HCL Software product development teams to investigate and identify the appropriate response plan to security vulnerabilities in HCL products.

HCL publishes [Security Bulletins](https://www.hcltechsw.com/resources/psirt#securitybulletins) to disclose security vulnerabilities. These are available on the [HCL Support portal](https://support.hcltechsw.com/csm). To help you evaluate and address each vulnerability, these security bulletins include CVE tracking numbers, CVSS scores, mitigations, and links to fixes.

HCL also posts important information regarding security vulnerabilities to the [HCL PSIRT Blog](https://support.hcltechsw.com/community?id=community_forum&sys_id=038a2b921b7bb34c77761fc58d4bcb0d). Subscribe to this blog to receive notifications about security vulnerabilities and remediation procedures.

## Recommended actions and considerations

- Install the most current maintenance for HCL Digital Experience that is suitable for your application.

- Subscribe to the HCL PSIRT Blog to be notified when security bulletins are published for new vulnerabilities.

    - It may not be practical for you to immediately install fixes on production systems. Minimally, you should establish a procedure and schedule for evaluating vulnerabilities, installing security fixes, and testing your application. Consider using CVSS scores as the basis for decisions regarding installation schedules.

- Integrate security fixes delivered for default themes into your custom theme.

    - Theme developers initially copy a default theme to prevent fix packs from overwriting customization. If a fix pack includes security fixes for a default theme, then any custom theme based on that default theme would need to be rebuilt to incorporate the fixes.

    - Later versions of HCL Digital Experience support custom themes based on certain default themes delivered with earlier versions. Monitor security bulletins for your current HCL Digital Experience version and any older versions used in your custom themes.

- Similarly to custom themes, integrate any security fixes for samples in custom code based on those samples (e.g. Struts Portlet Framework samples, Content Template Catalog).

- Install current maintenance for all other software that is integrated with your application, including:
    - client browsers, including any plug-in or add-on like Java

    - the application server

    - operating systems (client and server)

    - web servers

    - databases

    - external security managers
    
    - LDAP servers

    Refer to your vendors for these components regarding their practices for publishing security bulletins.

- If you discover a new security vulnerability in HCL Digital Experience, report it to HCL by opening a case.