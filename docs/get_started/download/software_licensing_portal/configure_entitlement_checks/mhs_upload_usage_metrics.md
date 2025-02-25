---
title:  Upload usage metric file to My HCLSoftware
---

## Accessing MyHCL Software usage reporting dashboard
Access the Deployments section of the My HCLSoftware portal to review entitlements and user session consumption reports.

![](../../software_licensing_portal/_img/upload_usage_metric_file.png) 

- Upload the usage metric file in MHS UI for a selected deployment.
- Wait for successful upload or look for error message if any validation or server failure on the UI 
  - If status is `validating` or `processing` . User can wait on the page or return back to see status changing to `completed` or `failed` or `rejected`
  - If status is `rejected` , it could be among these many reasons- hash chaining is tampered / invalid signature / fields are not in a required format . User should upload the valid file.
  - If the status is `failed`, reach out to My HCLSoftware Support through IT operations.
  - If status is `completed`, file is validated and consumed successfully