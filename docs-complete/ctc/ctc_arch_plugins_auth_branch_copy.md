# Plug-ins for Content Template 

These plug-ins are used with Content Template.

## Branch Copy plug-in

The branch copy plug-in all to copy a site area and all the child site areas and content items beneath it to a new site area.

To use the branch copy plug-in:

1.  Open then Web Content Manager authoring interface by going to **Applications** \> **Content** \> **Web Content Manager**.
2.  Browse to the site area you want to copy and open it in read mode.
3.  Click **More \> Copy Branch**.
4.  A copy of the site area, including all child site areas and content items, is created under the same parent site area as the original site area. You can then select this new site area and click **More \> Move** to move it to another location if required.

**Note:** To access the **Copy Branch** button a user requires:

-   Contributor access or higher to the site area.
-   Editor access or higher to the library resource type.
-   Editor access or higher to the library.

## Date Validation plug-in

The Date Validation plug-in is a Web Content Manager API ItemValidationPlugin that validates that the end date and time is after the start date and time in the Content Template events, meetings, and courses, whenever the event, meeting or courses is saved. As such, it is a good example of an ItemValidationPlugin.

This is the code in its entirety.

**Note:** The CTC Design library must exist when the server is started for the plug-in to function correctly.

```
package com.ibm.workplace.wcm.ctc;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.ibm.portal.ListModel;
import com.ibm.portal.Localized;
import com.ibm.workplace.wcm.api.AbstractAuthoringTemplate;
import com.ibm.workplace.wcm.api.AuthoringTemplate;
import com.ibm.workplace.wcm.api.Content;
import com.ibm.workplace.wcm.api.DateComponent;
import com.ibm.workplace.wcm.api.Document;
import com.ibm.workplace.wcm.api.DocumentId;
import com.ibm.workplace.wcm.api.DocumentIdIterator;
import com.ibm.workplace.wcm.api.DocumentLibrary;
import com.ibm.workplace.wcm.api.DocumentTypes;
import com.ibm.workplace.wcm.api.WCM_API;
import com.ibm.workplace.wcm.api.Workspace;
import com.ibm.workplace.wcm.api.exceptions.ComponentNotFoundException;
import com.ibm.workplace.wcm.api.exceptions.OperationFailedException;
import com.ibm.workplace.wcm.api.exceptions.ServiceNotAvailableException;
import com.ibm.workplace.wcm.api.extensions.validation.ItemContext;
import com.ibm.workplace.wcm.api.extensions.validation.ItemValidationPlugin;
import com.ibm.workplace.wcm.api.extensions.validation.ItemValidationResult;

/**
* Plugin to validate that the end date/time is after the start date/time for CTC
* Events, Courses, and Meetings.
*/
public class DateValidationPlugin implements ItemValidationPlugin
{
   /** CTC Design library name */
   private static final String CTC_DESIGN_LIBRARY_NAME = "CTC Design";
  
   /** Event template name */
   private static final String EVENT_AUTHORING_TEMPLATE_NAME = "Event";
  
   /** Meeting template name */
   private static final String MEETING_AUTHORING_TEMPLATE_NAME = "Meeting";
  
   /** Course template name */
   private static final String COURSE_AUTHORING_TEMPLATE_NAME = "Course";
  
   /** Start date element name */
   private static final String START_DATE_ELEMENT_NAME = "Start Date";
  
   /** End date element name */
   private static final String END_DATE_ELEMENT_NAME = "End Date";
  
   /** Logger */
   private static final Logger s_log = Logger.getLogger(DateValidationPlugin.class.getName());

   /** Class name for logging */
   private static final String CLASS_NAME = DateValidationPlugin.class.getName();
  
   @Override
   public ItemValidationResult validate(ItemContext p_itemContext)
   {
      if (s_log.isLoggable(Level.FINER))
      {
         s_log.entering(CLASS_NAME, "validate", p_itemContext);
      }
     
      // Assume item is valid unless we prove otherwise - we don't want to block the save unnecessarily
      boolean isValidItem = true;
      try
      {
         // Validate that the end date/time is after the start date/time
         // Don't allow the two dates to be the same
         Document document = p_itemContext.document();
         if (document instanceof Content)
         {
            Content content = (Content) document;

            // Start date/End date may not be required. So, if they're not set, don't validate them.
            DateComponent startDateComponent = (DateComponent) content.getComponent(START_DATE_ELEMENT_NAME);
            DateComponent endDateComponent = (DateComponent) content.getComponent(END_DATE_ELEMENT_NAME);
            if (startDateComponent != null && endDateComponent != null)
            {
               Date startDate = startDateComponent.getDate();
               Date endDate = endDateComponent.getDate();
               if (startDate != null && endDate != null)
               {
                  // Start date must be strictly after the end date (equal dates is not valid)
                  if (!endDate.after(startDate))
                  {
                     if (s_log.isLoggable(Level.FINER))
                     {
                        s_log.finer("Dates are invalid. Start date: " + startDate + ", end date: " + endDate);
                     }
                    
                     isValidItem = false;
                  }
                  else
                  {
                     if (s_log.isLoggable(Level.FINER))
                     {
                        s_log.finer("Dates are valid. Start date: " + startDate + ", end date: " + endDate);
                     }
                  }
               }
            }
         }
      }
      catch (ComponentNotFoundException e)
      {
         s_log.log(Level.FINE, "Failed to find Event end date and start date components for event validation", e);
      }
     
      DateValidationResult eventValidationResult = new DateValidationResult(isValidItem);
     
      if (s_log.isLoggable(Level.FINER))
      {
         s_log.exiting(CLASS_NAME, "validationScope", eventValidationResult);
      }
     
      return eventValidationResult;
   }

   /**
    * Result of the date validation
    */
   private static class DateValidationResult implements ItemValidationResult
   {
      /** Whether the content was valid */
      private boolean m_isValidResult;
     
      /**
       * Constructor
       * @param p_isValidResult
       */
      public DateValidationResult(boolean p_isValidResult)
      {
         super();
         m_isValidResult = p_isValidResult;
      }

      @Override
      public Localized[] errorMessages()
      {
         return new Localized[] {new Localized()
         {
            public String getTitle(Locale p_locale)
            {
               return CTCPluginResourceBundleKeyConstants.getString(CTCPluginResourceBundleKeyConstants.DATE_VALIDATION_ERROR_MESSAGE, p_locale);
            }

             public ListModel<Locale> getLocales()
	    {       // This plugin supports the same locals that Portal supports.       
									return CTCPluginResourceBundleKeyConstants.getLocales();    

			}     
			   @Override
   public String getTitle(final Locale p_locale)
   {
      return CTCPluginResourceBundleKeyConstants.getString(CTCPluginResourceBundleKeyConstants.DATE_VALIDATION_DESCRIPTION, p_locale);
   }
  
   @Override
   public boolean isShownInAuthoringUI()
   {
      return true;
   }
}
```

-   **[CTC Design Translations plug-in ](../ctc/ctc_arch_plugins_trans.md)**  
Use the CTC Design Translations plug-in to reference translations that are stored in the plug-in and also in other resource bundles. It is useful for translating designs that are reused in multilingual sites. It also provides localized translations for the Content Template Catalog designs.

**Parent topic:**[Assets contained in the Content Template ](../ctc/ctc-assets.md)

**Related information**  


[Creating a custom button class](../wcm/wcm_dev_api_custom_button.md)

[Creating an item validation plug-in class](../wcm/wcm_dev_api_custom_item_validation.md)

