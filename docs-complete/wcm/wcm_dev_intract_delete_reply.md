# Deleting a reply 

When you run a deleteReply action, the forums data sink uses a number of extra form fields.

They are listed here:

-   **replyEntryLink**

    Specifies the raw Atom entry link of the forum topic reply that you want to delete. This link must point directly to the HCL Connections server rather than to the Ajax proxy of the portal.

-   **deleteReason**

    Specifies the reason for deleting the reply. This field is optional.


The following code snippet shows a sample form for deleting a reply. It uses the `AttributeResource` tag of Web Content Manager to set the ID and the entry link of the reply in the context of a social list that contains forum topic replies:

```
<form method="POST" enctype="multipart/form-data" 
    action="[Plugin:ActionURL action="post" 
    param="resultSessionAttribute=myResult" 
    param="resultRenderParameter=myResult" compute=“always“]">    
    <input type="hidden" name="_charset_" value="[Plugin:EvaluateEL 
           value="${pageContext.response.characterEncoding}" compute="once"]"/>    
    <input type="hidden" name="action.uri" 
           value="forums:sr:[AttributeResource attributeName="id"]"/>
    <input type="hidden" name="action" value="deleteReply"/>
    <input type="hidden" name="replyEntryLink" 
           value="[AttributeResource attributeName="rawEntryLink"]"/>    
  Reason: 
    <input type="text" name="replyDeleteReason"/><br/>    
    <input type="submit" value="Post"/>
</form>
```

If the `deleteReply` action is successful, the forums data sink returns a JSON object. Example:

```
{
  "status":"success",
   "message":"The reply has been deleted.",
   "formData":{
      "action.uri":"forums:sr:urn:lsid:ibm.com:forum:815b1a6d-5a3c-4730-91d2-094075ff2e5d",
      "action":"deleteReply",               
      "replyEntryLink":"https://.../forums/atom/reply?replyUuid=815b1a6d-5a3c-4730-91d2-094075ff2e5d"
  }
}

```

If the `deleteReply` action fails, the forums data sink returns a JSON object as seen in the following sample:

```
{
   "status":"error",  
   "message":"The reply could not be deleted. If the problem persists, contact the system administrator.", 
   "formData":{
      "action.uri":"forums:sr:urn:lsid:ibm.com:forum:815b1a6d-5a3c-4730-91d2-094075ff2e5d",
      "action":"deleteReply",
      "replyEntryLink":"https://.../forums/atom/reply?replyUuid=815b1a6d-5a3c-4730-91d2-094075ff2e5d", 
      "replyDeleteReason":"This is my reason for deleting the reply."
  }
}
```

The `formData` property contains the actual form input, which includes all additional form data that you submit. If the action is successful, the `replyDeleteReason` is not returned to the caller.

**Parent topic:**[Implementing interactions with social objects ](../wcm/wcm_dev_impl_intrax_soc_objects.md)

