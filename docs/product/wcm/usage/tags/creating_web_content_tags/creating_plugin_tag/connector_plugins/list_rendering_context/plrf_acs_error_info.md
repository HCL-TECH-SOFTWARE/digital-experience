---
id: plrf_acs_error_info
title: Accessing error information
---
import useBaseUrl from '@docusaurus/useBaseUrl';



When you use the Digital Data Connector \(DDC\) for HCL Portal, you can access error messages for problems that occurred during the bean list computation.

Computing the bean list objects that result from setting a specific list-rendering context can fail due to various reasons. For example, there can be network problems, or the backend service that normally serves the data can be down. In this situation, the resulting bean list is empty and does not contain any items. To detect whether an error occurred and to access the error message that the DDC framework generates for the error situation, access the `[Plugin:ListRenderingContext]` plug-in.

To detect whether an error occurred, you can add the following HCL Web Content Manager tag to your design:

```
[Plugin:ListRenderingContext action="exceptionOccured"]
```

If the bean list computation succeeds, the plug-in writes the string `false`. If it fails, the plug-in writes the string `true`. To render different types of markup in the two situations, you can use the `[Plugin:Equals]` tag.

To access the error message if an error occurred, add the following Web Content Manager tag to your design:

```
[Plugin:ListRenderingContext action="getExceptionMessage" escape="xml"]
```

If the bean list computation fails, the plug-in writes the exception message. If no exception occurs, the plug-in writes no markup. To escape characters, use the escape parameter.

