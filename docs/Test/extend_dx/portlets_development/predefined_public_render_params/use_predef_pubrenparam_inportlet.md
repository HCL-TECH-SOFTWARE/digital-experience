# To use predefined public render parameters in your portlet

Creating portlet URLs based on these predefined public render parameters is not different from creating any other portlet URL. The typical use case is to create a portlet render URL that addresses one or multiple predefined public render parameters.

The following code snippet shows how to create a portlet render URL that takes the user to a specific portal page. And to create a portlet render URL that requests the page to be displayed in a certain locale. The URL is created within the render phase of the portlet lifecycle. The sample code assumes that the page selection and locale parameter are registered in the portlet deployment descriptor and mapped to the local identifiers pageID and locale. For more information, see the sample in [To register predefined public render parameters in portlet.xml](reg_predef_pubrenpara_inptl.xml.md).

The logic that determines the values of the parameters is not a part of the code example as it strongly depends on the specific use case. Typically you would use the Model SPI to search for a specific page in the content model and then address the page by using its ObjectID. If you want to create deep links to specific pages, you can also address the page through its unique name. In this case, you can set the unique name as the value for the selection parameter.

Code Sample:

```
import com.ibm.portal.ObjectID;
import com.ibm.portal.identification.Identification;
import com.ibm.portal.serialize.SerializationException;

public class MyPortlet extends GenericPortlet {

    /** The identification service. */
    private Identification identification = null;;

    @Override
    public void init() throws PortletException {
        try {
            // default handling
            // ...
            // lookup identification service
            final Context ctx = new InitialContext();
            identification = (Identification) ctx.lookup(Identification.JNDI_NAME);
        } catch (NamingException e) {
           throw new PortletException(e);
        }
   }

   @Override
   protected void doView(final RenderRequest request, final RenderResponse response)
           throws PortletException, IOException {
       try {
           // content type handling, markup generation etc.
           // ...
           // determine the values that should be set
           final ObjectID pageID = getPageID(request);
           final Locale locale = getLocale(request);
           // create a new render URL
           final PortletURL renderURL = response.createRenderURL();
           // set the page selection parameter
           renderURL.setParameter("pageID", identification.serialize(pageID));
           // set the locale parameter
           renderURL.setParameter("locale", locale.toString());
           // write the URL to the markup
           // ...
      } catch (SerializationException e) {
          throw new PortletException(e);
      }
  }
  ....
```


