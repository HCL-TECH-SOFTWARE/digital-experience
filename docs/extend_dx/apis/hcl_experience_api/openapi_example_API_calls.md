# Example API Calls

To give users more insight on how to use Experience API, the following samples are provided.

## Sample process flow: Login, accessing content, and logout

-   **Call Examples**

    Before sending an API call, users need to get the UUID of the content they want to access out of HCL Digital Experience 9.5. Here are the steps to follow:

    1.  Log in to HCL Digital Experience 9.5 using `http://<PORTAL_HOST>:<PORTAL_PORT>/wps/portal`.
    2.  Go to **Web Content Authoring**.

        !!! note
            -   If you have Practitioner Studio enabled, navigate to **Web Content \> Authoring**.
            -   If you do not have Practitioner Studio configured in your Digital Experience 9.5 deployment, navigate to **Content \> Authoring**.

    3.  From **Authoring**, click on the **Web Content \> Content \> Articles**. A list of articles is displayed.
    4.  Click on any article and select **Properties \> Content Properties**.
    5.  Look for UUID value. If not available click on **More \> Show More Fields**.
    6.  Copy the UUID value.
    Use the UUID obtained in the previous process and use it to access content and logout flow:

        1.  Open HCL Experience API explorer using `http://<HOST>:<PORT>/dx/api/core/v1/explorer` (e.g. 'http://127.0.0.1:3000/dx/api/core/v1/explorer`).
        2.  Execute Login API endpoint `auth/login` by entering a valid username and password.
        3.  Once the login is successful, execute the following content ID endpoint to fetch content based on the content ID:

            ```
            /{accessType}/webcontent/contents/{contentId}
            ```

        4.  Pass the UUID value copied earlier as `contentID`. The json in the request body will need to be update to have a correct content name. For example:

            ```
            {"contentName": "Sample Article"}
            ```

        5.  Verify if the content payload is received. It should contain information about the article you wanted to access.
        6.  To log out of HCL Experience API, execute the Logout API command.

## Sample scripts: Login, Get roles, Get roles with authentication

Open the HCL Experience API GraphQL URL: http://localhost:4000/dx/api/core/v1/graphql.

See example result:

![](./assets/ExperienceAPI_GraphQL_HCL_DX.png)

-   ****

    Copy the scripts below and place those in the left panel of the HCL Experience API interface, then click on the execute button:

    1.  **Login Script**

        ```
        mutation
        {
                        authLogin(authLoginInput:{username: "wpsadmin", password:"wpsadmin"}){
                        message
                        statusCode
                        }
                        }
        ```

        ![Experience API login script](./assets/ExperienceAPI_login_script.png)

    2.  **Get Roles script (Without authentication)**

        ```
        query{
                        accessGetRoles(accessType: dxrest, resourceId: "hcl.portal.hiddenpages"){
                        startIndex
                        itemsPerPage
                        totalResults
                        }
                        }
                      
        ```

        ![Experience API get roles script without authorization](./assets/ExperienceAPI_get_roles_script.png)

    3.  **Get Roles script (With authentication)** - Refer to the screenshot below to retrieve the cookie and pass using the HCL Experience API.

        ```
        query{
                          accessGetRoles(accessType: dxmyrest, resourceId: "hcl.portal.hiddenpages", 
                          cookie :"LtpaToken2=EF/
                          32eLqVkB8DmPoF2Oa7AK82OuP7UwVKejVMJzNiVGJ6DtGWzQjm/
                          2i2V8aFf8hbNnxzqBhiYvg27qavPehNl+42/
                          iCleAdiGhZsgpPFNTLEbjlj+GAhxl+VCU1hhU78hOT2xDHkvjRz74eU6JU5RapIK3MZd
                          yHlI4QzQggg+t7f6Hzq8TY/gWEPlAKio+v74i7H4Snj28YYikDzLwKbqh/
                          0c3uORdCCcrjtJJB6Jv59HuUyeeFIAA1DbKj5vr2QBy9r4b6IgdtLyZJqNK2pASGzOrzJ
                          myckF+d65pG56mXDxPrQRsr1ccmIXid+jLu50GziCVtI/DC+SYKkTe/
                          +FLFIFzdbuzyyCxiVo+G91HTCSdfuBzpNFEhNODCBPE5OJtD00L2yEhugbDulLFJid9C
                          RI3qW7LIwnVrs66Bh7/G0ehTJ7+cn/YKqhc/EoV/
                          hIuD5RgJTIQmFmRUISzGKfqaEsDs2W/
                          LMPM3fVxbeW9+2QvlHwWgqfK9A96u14Gvfc991Q/
                          iyJRmMj6tLmf2qAzyBTJKpoZkMt6FezkxUExNzzgf6ZvYa8s8uMV5pzsMhUX/
                          7s8SfkrwxJXdCYP75xUH/xvvkW+J5w9pm0uSJsPgj6Er8RtqUXRWvACBZ51T/
                          6VUl8yXcJpuuVoGROl8IIFZz8xCkQuqABHc8cWjdM8="){
                          startIndex
                          itemsPerPage
                          totalResults
                          }
                          }
        ```

        ![Experience API get roles script with authorization](./assets/ExperienceAPI_get_roles_with_auth.png)


## HCL Software Academy course

For an introduction and a demo on how to use Experience API, go to [Experience API](https://academy.hcltechsw.com/component/axs/?view=sso_config&id=1&forward=https%3A%2F%2Facademy.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D416). To try it out yourself, refer to [Experience API Lab](https://academy.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_for_Beginners.pdf) and [Experience API Lab Resources](https://academy.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_Lab_Resouces.zip).

