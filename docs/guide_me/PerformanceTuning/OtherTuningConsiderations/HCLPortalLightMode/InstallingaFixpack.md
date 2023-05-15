# Installing a Fixpack

Best practice is to create your own theme based on the theme that HCL Portal ships. If you use the shipped themes instead of creating your own, some tuning you applied will get overwritten when a cumulative fix is applied.

After installing a cumulative fix, the tuning to commonActions.jsp will need to be reapplied. In addition, the default theme profile and the login portlet's theme profile is overwritten. If you are using customized theme profiles, those customizations will need to be re-applied after installing a cumulative fixpack.