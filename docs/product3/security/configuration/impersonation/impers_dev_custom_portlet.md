# Developing a custom portlet

You can use the default Impersonation portlet to impersonate specific users. Alternatively, you can create a resource environment provider to enable impersonation and develop a custom portlet for impersonating users.

## Sample code

If you do not want to use the HCL Portal **Impersonation** portlet, use the following sample to develop a portlet to impersonate users:

```
import com.ibm.portal.portlet.service.impersonation.ImpersonationService;
import com.ibm.portal.portlet.service.PortletServiceHome;

public class MyImpersonationPortlet extends GenericPortlet
{
    private PortletServiceHome psh;

    @Override
    public void init() throws PortletException
    {
        try
        {
            javax.naming.Context ctx = new javax.naming.InitialContext();
            psh = (PortletServiceHome) ctx.lookup(ImpersonationService.
JNDI_NAME);
        } catch (Exception ex)
        {
            // error handling
        }
    }

    @Override
    public void processAction(ActionRequest request, ActionResponse
response) throws PortletException, IOException
    {
        // obtain the service object and use the service
        ImpersonationService impersonationService = (ImpersonationService)
psh.getPortletService(ImpersonationService.class);
        try
        {
            impersonationService.doImpersonate(request, response,
stringuserDN);
        } catch (Exception e)
        {
            // error handling
        }
    }
}
```

You can enter the information for the user you want to impersonate in the `stringuserDN`. Alternatively, you can use the PUMA SPI User object.

**Note:** The impersonation feature becomes active with the next request.

**Parent topic:**[Administering user impersonation](../admin-system/impers_user.md)

