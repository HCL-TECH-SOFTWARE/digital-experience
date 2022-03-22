# Create a deployment manager

When you set up a cluster, you must create a deployment manager profile. Use the Configuration Wizard to set up the profile.

## Configuration Wizard

The **Create a Deployment Manager** is a sub step in the **Set Up a Cluster** configuration.

# Creating a deployment manager

You can create the new deployment manager profile on the same server as portal or on a remote server.

If the deployment manager is on a different server than your portal, the create deployment manager profile process has one manual step. Based on the information that you provide in the wizard, the wizard creates custom instructions for the manual step.

Each potential step in the configuration is included.

1.  Manual Step: Install the deployment manager software.

    -   **Condition**

        Remote server deployment manager

    -   **ConfigEngine task**

        None

2.  Create the deployment manager profile.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

3.  Start the deployment manager server.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

4.  Augment the deployment manager profile with the portal profile template.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

5.  Stop the deployment manager.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None

6.  Start the deployment manager after the profile augmentation is complete.

    -   **Condition**

        None

    -   **ConfigEngine task**

        None


If you changed the context root during the installation or configuration of HCL Digital Experience, then you must complete the following steps:

1.  Log on to the Deployment Manager WebSphere Integrated Solutions Console.
2.  Go to **Security** \> **Global security** \> **Trust association** \> **Interceptors** \> **com.ibm.portal.auth.tai.HTTPBasicAuthTAI**.
3.  Edit the urlBlackList and urlWhitelist parameters with the new context path; for example:
    -   urlBlacklist: /wpsmodified/myportal\*
    -   urlWhiteList: /wpsmodified/mycontenthandler\*
4.  Click **Apply**, and save all changes.
5.  Log out of the Deployment Manager WebSphere Integrated Solutions Console.

Next, use the **Create a Cluster** option to create a static or dynamic cluster.

