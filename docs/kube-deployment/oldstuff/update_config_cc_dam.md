# Update the HCL DX 9.5 Experience API, Content Composer, and Digital Asset Management components

This section provides the steps to update the HCL Digital Experience 9.5 Experience API, HCL Digital Experience 9.5 Content Composer, and HCL Digital Experience 9.5 Digital Asset Management components.

## Update the HCL Digital Experience 9.5 Experience API, Content Composer, and Digital Asset Management images

New HCL Digital Experience 9.5 CFxxx container images are released on a regular cadence, through the**[HCL DX 9.5 Container Update deliveries](../overview/container_update_releases.md).**

Consult the Digital Experience 9.5 Container **[Deployment](deployment.md)** topic for the latest list of DX 9.5 Container Images that are available.

Customers should not apply maintenance to an HCL Digital Experience 9.5 container image. Instead, they should run the update process as described below.

Customers should not extend the HCL Digital Experience 9.5 container images. They are not intended to be used in the FROM instruction as a parent image.

To update the Experience API, Content Composer, and Digital Asset Management images to a later container update version, follow these steps:

**Note:** All images must be moved to the target release.

1.  Create a backup of the Digital Asset Management components. Follow instructions to do so outlined in the[HCL Digital Experience Containerization Backup and recovery procedures](operator_backup_and_recovery_procedures.md) topic.
2.  Update the Experience API, Content Composer, and Digital Asset Management component images to a later container update by modifying the image tag for each component to be updated with the later versions tag, as in this example:

    **Note:** It is possible to deploy the services for the HCL Experience API and HCL Content Composer and/or Digital Asset Management by removing either the HCL Content Composer or HCL Digital Asset Management service lines from the YAML file.

    ```
    kind: ConfigMap
    metadata:
      name: dx-deployment
    ```

    ```
    data:
      dx.deploy.dam.persistence.tag: v1.0.0_20200622-1806
      dx.deploy.dam.persistence.image: portal/persistence/postgres
      dx.deploy.dam.volume: volume name
      dx.deploy.dam.imgprocessor.tag:  v95_CF181_20200622-1550
      dx.deploy.remotesearch.tag: v95_CF181_20200622-1550
      dx.deploy.dam.imgprocessor.image: portal/image-processor
      dx.deploy.dam.storageclass: dx-deploy-stg
      dx.deploy.remotesearch.image: dxrs
      dx.deploy.openldap.tag: v1.0.0-release_20200622_1592846796
      dx.deploy.openldap.image: dx-openldap
      dx.deploy.contentui.tag: v1.0.0_20200622-1709
      dx.deploy.contentui.image: portal/content-ui
      dx.deploy.remotesearch.enabled: 'true'
      dx.deploy.dam.tag: v1.0.0_20200622-1718
      dx.deploy.experienceapi.tag: v1.0.0_20200622-1719
      dx.deploy.experienceapi.image: portal/api/ringapi
      dx.deploy.dam.image: portal/media-library
      dx.deploy.openldap.enabled: 'true'
      dx.deploy.contentui.enabled: 'true'
      dx.deploy.experienceapi.enabled: 'true'
      dx.deploy.dam.enabled: 'true'
      dx.deploy.dam.operator.tag: v95_CF181_20200622-1756
      dx.deploy.dam.operator.image: hcl-medialibrary-operator
      dx.deploy.remotesearch.volume.storageclass: gp2
    
    ```

    1.  Deploy the YAML \(`dx-deploy-config-map.yaml`\) with the updated Experience API, Content Composer and Digital Asset Management file names listed by issuing the command:
        -   Kubernetes:
            -   ```
kubectl apply -f dx-deploy-config-map.yaml -n your-namespace
```

                or

            -   ```
kubectl edit configmap name-of-map -n project
```

        -   OpenShift:

            -   ```
oc project your-namespace
```

                followed by

            -   ```
oc apply -f dx-deploy-config-map.yaml
```

            to perform the update. The deployment will automatically restart a few times and make appropriate configuration changes during these restarts. Once complete, the deployment is upgraded.


## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

**Parent topic:**[Container administration 9.5](../containerization/maintenance.md)

