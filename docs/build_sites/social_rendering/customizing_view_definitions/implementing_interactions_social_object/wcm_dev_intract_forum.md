# Interacting with forums

HCL Portal provides a built-in data sink that supports different interactions with forums.

To implement such an interaction, the HTML form that targets the Web Content Viewer portlet must include all of the following:

-   The URI of the forums data sink. The URI must be specified in the `action.uri` form field
-   The name of the action that you want to have performed
-   Extra input data that is required for the specified action. The URI of the forums data sink must contain the identifier of the target social object, for example, a forum topic or a forum topic reply. You must add the identifier to the scheme-specific part of the URI after a separating colon, `sr:forums:$REPLY_ID`. The forums data sink also expects the `action` form field to be submitted along with the form POST request. It specifies the action that you want to have performed on the target resource that is identified by the URI. The data sink supports the following actions:
    -   **createReply:**

        The forums data sink creates a new reply to the target social object, which must be either a forum topic or another forum topic reply.

    -   **deleteReply**

        The forums data sink deletes the target social object, which must be reply.


Depending on the action, the data sink requires extra form data.

!!! note
    The update operation for individual replies that Forum Topic Details appearance component supports is implemented as a post to *The generic XML Digital Data Connector data sink*.


???+ info "Related information"
    - [The generic XML Digital Data Connector data sink](../../../../extend_dx/ddc/implementing_user_interactions/sending_data_to_webcontentviewer_portlet/generic_xml_ddc_sink/index.md)

