# Using XML Access to export and import Digital Asset Management assets

Using XML Access with HCL DX CF19 and higher, to manage staging scenarios, administrators can import, export, and control Digital Asset Management access control data.

This enables a Digital Asset Management staging scenario in which an administrator can copy the persistent volumes as deployed in Kubernetes or OpenShift platforms for Digital Asset Management, and the persistence layer from the source deployment system. The XML Access script will also export the Digital Asset Management assets access control information, and then import all artifacts it to the target deployment system.

!!! note
    This staging scenario presents some constraints:
    -  All Digital Asset Management access control assets will be copied from the source deployment (staging) to the target deployment system.
    - The assets on the target system will be replaced.
    - Access Control is matched between environments, though it is possible to manipulate the access control data after completing the export.
