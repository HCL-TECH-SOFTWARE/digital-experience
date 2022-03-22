# Deploying Custom Code in OpenShift

This section outlines deploying custom code to HCL Digital Experience in OpenShift.

Follow these steps to deploy custom code in OpenShift.

Along with the benefits of moving HCL Digital Experience to a containerized and orchestrated environment, there also comes the deployment and customization process changes. As containers are short-lived, changes made during the container's runtime are transient. For this reason, a persisted volume is required to retain the HCL Digital Experience configuration settings. The server's profile directory tree, the default and obligatory mount point for persistence, currently stores this information, for example, /opt/HCL/wp\_profile.

The recommended approach for deploying custom applications to HCL Digital Experience running in the OpenShift Container Platform is through an automated Continuous Integration and Continuous Delivery \(CI/CD\) pipeline connected to a source code repository containing a pipeline script. For our purposes, we use Jenkins and GitHub. A sample Jenkinsfile and BuildConfig.yaml is provided.

In an OpenShift environment, you can deploy a Jenkins instance with either of the following two \(2\) OpenShift Client commands.

```
oc new-app jenkins-ephemeral
```

```
oc new-app jenkins-persistent
```

As the commands imply, the Jenkins instance can be persistent or transient. Persistent requiring a persistent volume.

1.  Configure the Jenkins server tools as needed for your custom code build requirements. Navigate to **Manage Jenkins** \> **Global Tool Configuration** and add the tools needed to build your application. For our purposes, we configured Ant and JDK 8.
2.  Configure the Jenkins server credentials as needed to access you source code repository. Connection through an SSH key for the application repository and OpenShift is recommended.

    ```
    ssh-keygen -C "openshift-source-builder/repo@github" -f repo-at-github -N ''
    ```

    This will generate a public repo-at-github key file and a public repo-at-github.pub key file.

3.  Copy the public key contents to your clipboard.

    ```
    clip < ~/.ssh/repo-at-github.pub
    ```

4.  Navigate to your GitHub repository \> **Settings** \> **Deploy Keys** \> **Add deploy key**. Provide a title for the key, paste the clipboard contents into the key textbox and click Add Key.
5.  Copy the private key contents to your clipboard.

    ```
    clip < ~/.ssh/repo-at-github
    ```

6.  Add the private key to the Jenkins server as an OpenShift secret.

    ```
    oc create secret generic repo-at-github --from-file=ssh-privatekey=~/.ssh/repo-at-github
    ```

7.  Link the secret to OpenShift builder.

    ```
    oc secrets link builder repo-at-github
    ```

8.  Create an OpenShift Build Config for building the custom application code stored in GitHub using the provided sample yaml file customized for your environment.

    ```
    oc create -f customized-sample-build-config.yaml
    ```

    ```
    kind: BuildConfig
    apiVersion: build.openshift.io/v1
    metadata:
      name: <name of your application pipeline>
      namespace: <namespace-in-openshift>
    spec:
      source:
        git:
          uri: "git@github.com:<my custom code directory>/<my custom repository>.git"
      strategy:
        jenkinsPipelineStrategy:
          jenkinsfilePath: jenkinsfile
      triggers:
        - type: GitHub
          github:
            secret: <myCustomAppSecret>
    ```

9.  Link the GitHub repository secret to the OpenShift Build Config.

    ```
    oc set build-secret --source bc/custom-editor-app-pipeline repo-at-github
    ```

10. To enable OpenShift to compile and deploy the custom application with each source code commit to GitHub, configure a webhook in the GitHub repository for the OpenShift Build Config.

    Navigate to your GitHub repository \> **Settings** \> **Webhooks** \> **Add webhook**. To find the value of the Webhook Payload URL, use the OpenShift client describe command for the Build Config:

    ```
    oc describe bc/<name of your application pipeline>
    ```

    For example, your Webhook Payload URL may look something like the following:

    ```
    https://api.hcl-dxdev.hcl-dx-dev.net:6443/apis/build.openshift.io/v1/namespaces/<namespace-in-openshift>/buildconfigs/<nameOfYourApplicationPipeline>/webhooks/<myCustomAppSecretFromTheSampleBuildConfigFile>/github
    ```

11. Set the **Content type** of the Webhook to application/json. If your environment is not using a properly signed certificate, choose to disable SSL.
12. Install and configure the Jenkins plugins required for your application build environment.
13. Navigate to **Manage Jenkins** \> **Manage Plugins**. From the **Available** tab, install the following plugins as necessary, as well as others needed based on your requirements.
    -   ```
WebSphere-Deployer Plugin
```

    -   ```
Copy Artifact Plugin
```

    -   ```
OpenShift Client Jenkins Plugin (if not already installed)
```

14. Configure the WebSphere-Deployer plugin to connect to the WebSphere Integrated Solutions Console. Restart the Jenkins server.

    ```
    https://<jenkins-in-openshift-url>/restart
    ```

    **Note:** If in an OpenShift environment, a trusted SSL certificate is required for the WebSphere-Deployer plugin. Both the source repository and the Jenkins server require network access to the WebSphere Integrated Solution Console route.

15. Create the Jenkins deployment job for your application. Use the Copy Artifact plugin to provide the application build output to the deployment job.

    **Note:** It is required to configure the deployment job for the application in the Jenkins GUI as the WebSphere-Deployer Plugin is not executable from the command line, and therefore cannot be scripted.

16. Navigate to your OpenShift **ProjectName** \> **New Item**, provide a name for the application deployment job, select **Freestyle Project** and click **OK**.
17. On the **General** tab of the deployment job's configuration page, check the **Restrict where this project can be run** check box and enter **master** in the **Label Expression** text box.

    **Note:** The WebSphere-Deployer plugin only supports deployment from a Jenkins master.

18. Scroll down to the **Build Step** section of the configuration page, from the **Add build step** dropdown, choose **Copy artifacts from another project**. For the **Project name**, enter the name of the application build project. The default application build project name will be **<namespace-in-openshift\>-<name of your application pipeline\>**.
19. In the **Which build** dropdown, select **Upstream build that triggered this job**. In the **Artifacts to Copy** text box, enter the artifacts required for your deployment. Enter any additional parameters relevant to your environment.
20. Scroll down to the **Post-Build Actions** section of the configuration page, from the **Add post-build action** dropdown, choose **Deploy To IBM WebSphere Application Server**. Enter the required WebSphere information for your environment. Check the **Connect using Global Security** check box and enter the **WebSphere administrator username** and **password**.

    **Note:** The WebSphere administrator credentials are stored in plain text in the job config.xml files on the Jenkins master.

    Check the **Trust SSL Certificate** checkbox. Click on the **Advanced...** button and enter the **KeyStore** and **TrustStore** values.

21. Ensure the **Test Connection** and/or **Show Available Targets** buttons show successful returns. Enter any additional deployment options relevant to your application and click **Save**.

    **Note:** The pipeline can be launched from the **OpenShift Platform Console Build Configs** page, the `oc start-build <build-config-name>` command, or with a commit to the GitHub repository.

    The pipeline will copy the application artifact to an HCL Digital Experience instance in OpenShift. The directory where the artifact is copied must already exist and have the appropriate permissions.

    **Sample Jenkins file**

    ```
    pipeline{
       agent any
       environment {
          appName           = 'CustomHTMLEditor'
          earFileName       = 'CustomHTMLEditor.ear'
          antHome           = tool 'JenkinsAnt'
          //Name of the pod to which the application binaries will be copied
          dx_instance_name  = 'dx-deployment-0'
          //Path location within HCL Digital Experience to where to the applciation binaries will be copied
          app_binary_path   = '/opt/HCL/wp_profile/customApps/'
       }
       options {
          //Value needs to match the name of the downstream application deploy job created in the Jenkins console.
          copyArtifactPermission('deploy-custom-editor-app') 
       }   
       stages {
          stage('Log Entry') { 
             steps {
                script {
                   openshift.withCluster() {
                      openshift.withProject() {
                         echo "Building: ${appName} in project: ${openshift.project()}."
                      }
                   }
                }
             }
          }      
          stage('Checkout') { 
             steps {
                git 'http://github.com:<my custom code directory>/<my custom repository>.git'
             }
          }
          stage('Build') {
             steps {
                   sh "'${antHome}/bin/ant' clean makezips"
             }
          }
          stage('Archive') {
             steps {
                archiveArtifacts 'build/dist/*.ear'
             }
          }      
          stage('Deliver') {
             steps {
                script {
                   openshift.withCluster() {
                      openshift.withProject() {
                      def result = openshift.raw ( 'cp', '${WORKSPACE}/build/dist/${earFileName} ${dx_instance_name}:${app_binary_path}')
                      echo "Delivery Status:  ${result.out}"
                      }
                   }
                }
             }
          }        
          stage('Deploy'){
             steps {
                //Value needs to match the name of the downstream application deploy job created in the Jenkins console.
                build 'deploy-custom-editor-app'
                }
          }
          stage('Log Exit') { 
             steps {
                script {
                   openshift.withCluster() {
                      openshift.withProject() {
                         echo "Completed build, delivery and deployment of ${appName} in project: ${openshift.project()}."
                      }
                   }
                }
             }
          }        
       }  
    }
    ```


**Parent topic:**[Deploy DX 9.5 Container to Red Hat OpenShift](../containerization/openshift.md)

**Parent topic:**[Digital Experience Application deployment](../containerization/ci_cd.md)

