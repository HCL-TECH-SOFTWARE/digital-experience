# Uninstall

To remove your HCL Digital Experience 9.5 deployment from your Cluster deployed using Helm, it is recommended that you use Helm uninstall.

## Uninstall command


To run the uninstall, use the following command as shown in this example:

```
    # Helm uninstall command
    helm uninstall your-release-name -n my-namespace
```

where `my-namespace` is the namespace where your HCL Digital Experience 9.5 deployment is installed to and `your-release-name` is the Helm release name you selected during installation.

After a successful deployment, Helm responds with the following message:

```
    release "your-release-name" uninstalled
```
