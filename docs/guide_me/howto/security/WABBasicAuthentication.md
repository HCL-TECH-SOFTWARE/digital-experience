# How to Configure Web Application Bridge (WAB) to Connect to Back-end Application That Requires Basic Authentication

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

Some users require a secure connection to their back-end application using Basic Authentication.

If there is a need to test these config steps in a secured manner below steps can be used.

## Instructions

**Steps to configure WAB for Basic Auth:**

1. Login to Portal as Administrator > Administration (wrench icon) > Access >  Credential Vault > Add a Vault Slot > Name = "BasicAuthVaultSlot" > new resource "BasicAuthResource" > click box "Vault slot is shared" > enter user and password to be used for the Basic Auth Challenge > ok

2. Next, go to Administration > Virtual Web Application Manager > Content provider profiles > click button "Create Content Provider Profile" > Unique Profile Title = "basicAuthProfile" > hostname = "http://server:port" where server/port is the location of the app requiring basic authentication > Save

3. Click on "default" > edit > click "Single Sign-On" > select "HTTP Basic Authentication" > select "BasicAuthVaultSlot" > Save

4. Click on "Web Doc Applications" > "Create Web Dock Application" > Title = "basicAuthDock" > select "basicAuthProfile" > enter the resource path for the back-end application e.g. /basicAuth/basicAuthClass > Save

5. Put Portal in Edit mode and create a new page. Then locate and add the "basicAuthDock" application from the Applications Palette > verify the authenticated data from the back-end app is displayed on the page.
