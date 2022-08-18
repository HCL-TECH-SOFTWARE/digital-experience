---
id: sitebuilder_lib_hide
title: Hiding libraries in Site Builder
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can prevent libraries from being shown to website creators and administrators that use Site Builder on a particular server. When you hide a library, it does not display in Site Builder, either as a required library or as a library that can be chosen for storing content. Hidden libraries are also excluded from exported site template packages. The content library selection, "Use the existing portal content library \(Portal Site\)" is always shown to users.

Before you start, you must know the library names that you want to hide.

1.  Log in as the portal administrator.
2.  Click **Administration** \> **Portal Content** \> **Web Content Libraries**.
3.  Write down the names of the libraries you want to hide, exactly as they appear.

    If a library displays multiple names, it has been renamed and you must use the original internal name that is shown in brackets.


To hide a library, change the Site Builder portlet preference for SiteTemplateLibBlackList. When you install Site Builder, the preference is set to hide the Portal Site library and the Content Template libraries so they cannot be overwritten accidentally if a site template is exported.

Updating the blacklist replaces the existing one. Libraries are not added to an existing blacklist. Each time that you update the blacklist, you must include all the libraries you want to hide, including libraries that are previously listed in the black list.

The Site Builder Template Library is always hidden in Site Builder regardless of the preference setting.

1.  Logged in as the portal administrator, click **Administration**.

2.  In the navigation tree, click **Portlet Management** \> **Portlets**.

3.  Browse to the Site Builder portlet. The unique name is wp.ctc.nswiz.app.Site Builder.

4.  Click the **Configure portlet** icon.

5.  Browse to the **SiteTemplateLibBlackList** preference and click the **Edit value** icon.

6.  Enter or add to the list of libraries you want to hide. Separate each entry with a hash \(\#\) sign. Use the exact spelling of the original HCL Web Content Manager, but the list is not case-sensitive.

    For example, this list excludes the Blog Solo Template v70 and Web Content Templates libraries, and the CTC libraries.

    ```
    Blog Solo Template v70#Web Content Templates#CTC Content#CTC Demo#CTC Design#CTC Process
    ```

7.  Click **OK**.

8.  Click **OK**.


