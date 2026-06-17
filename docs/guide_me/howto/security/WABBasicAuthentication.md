# How to configure a Web Application Bridge (WAB) to connect to a back-end application that requires basic authentication

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

Some users require a secure connection to their back-end application using basic authentication. If there is a need to test these config steps in a secured manner below steps can be used.

## Instructions

1. Login to the Portal as Administrator.  

2. Navigate to **Administration (wrench icon) > Security >  Credential Vault**.  

3. Click to **Add a Vault Slot**.  

4. Enter the Name `BasicAuthVaultSlot`.  

5. Under **Vault resource associated with vault slot** select **New**.  

6. enter the name `BasicAuthResource`.

7. Click box **Vault slot is shared**.

8. Enter the user and password to be used for the Basic Auth Challenge. Then click to the **OK** button.  

9. Next, navigate to **Administration > Production > Virtual Application Manager > Content Provider Profiles**.  

10. Click the button **Create Content Provider Profile**.

11. In the Unique Profile Title enter `basicAuthProfile`.

12. Specify the hostname in the format `http://server:port` where server/port is the location of the app requiring basic authentication. Then click to the **Save** button.

13. At the **basicAuthProfile** entry click on the **default** button.  

14. Then click to **edit**.

15. Click to the **Single Sign-On** tab and select "HTTP Basic Authentication".

16. Select **BasicAuthVaultSlot** and then to the **Save** button.

17. Click on **Web Doc Applications** and then to **Create Web Dock Application**.  

18. Enter the Title `basicAuthDock` and select **basicAuthProfile**.

19. Enter the resource path for the back-end application e.g. `/basicAuth/basicAuthClass` and then click to the **Save** button.

20. Activate the Portal Edit mode and create a new page. Then locate and add the **basicAuthDock** application from the Applications Palette.

21. Verify the authenticated data from the back-end app is displayed on the page.
