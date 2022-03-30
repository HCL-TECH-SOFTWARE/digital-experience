# Using LtpaToken2 for user login 

By default, the credential settings in the CSEnvironment.properties file are set to use an LTPA token for user login. If your environment is configured with LtpaToken2 only, you must modify the CSEnvironment.properties file to use LtpaToken2 instead of LtpaToken.

**Note:** If your environment uses both tokens \(LtpaToken and LtpaToken2\), you do not need to change this setting in CSEnvironment.properties

1.  Modify the CSEnvironment.properties file.

2.  To override the default LtpaToken setting and use LtpaToken2 instead, change the following setting to the value shown:

    ```
    CS_SERVER_HCL Portal and HCL Web Content Manager_EXTEND.credential_type=LtpaToken2
    ```


**Parent topic:**[Collaborative Services environment properties ](../collab/i_domi_c_csenvironment_props_intro.md)

