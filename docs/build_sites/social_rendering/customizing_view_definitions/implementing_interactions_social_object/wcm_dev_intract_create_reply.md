# Creating a reply

When you run a createReply action, the forums data sink uses a number of extra form fields.

They are listed here:

-   **parentEntryLink**

    Specifies the raw Atom entry link of the forum topic or forum topic reply to post a reply to. This link must point directly to the HCL Connections server rather than to the Ajax proxy of the portal.

-   **parentRepliesLink**

    Specifies the raw replies link of the forum topic or forum topic reply to post a reply to. This link must point directly to the HCL Connections server rather than to the Ajax proxy of the portal. -

-   **replyTitle**

    Specifies the optional title of the reply to create.

-   **replyContent**

    Specifies the content of the reply to create.


The following code snippet shows a sample form for creating a reply. It uses the `AttributeResource` tag of Web Content Manager to set the ID, the entry link, and the replies link of the parent social object in the context of a social list.

```
<form method="POST" 
    enctype="multipart/form-data" action="[Plugin:ActionURL action="post" 
    param="resultSessionAttribute=myResult" param="resultRenderParameter=myResult" 
        compute=“always“]">    
    <input type="hidden" name="_charset_" 
           value="[Plugin:EvaluateEL value="${pageContext.response.characterEncoding}" 
           compute="once"]"/>    
    <input type="hidden" name="action.uri" 
           value="forums:sr:[AttributeResource attributeName="id"]"/>    
    <input type="hidden" name="action" value="createReply"/>    
    <input type="hidden" name="parentEntryLink" 
           value="[AttributeResource attributeName="rawEntryLink"]"/>    
    <input type="hidden" name="parentRepliesLink" 
           value="[AttributeResource attributeName="rawRepliesLink"]"/>
  Title: 
    <input type="text" name="replyTitle"/><br/>    
    <textarea name="replyContent" rows="3" cols="25">Please enter your reply.</textarea><br/>     
    <input type="submit" value="Post"/>
</form>
```

If the `createReply` action is successful, the forums data sink returns a JSON object. Example:

```
{
  "status":"success",
  "message":"Your reply has been created.",
  "formData":{
      "action.uri":"forums:sr:8fd51c01-6505-4d78-b364-415edf649e91",
      "action":"createReply",
      "parentEntryLink":"https://.../forums/atom/topic?topicUuid=8fd51c01-6505-4d78-b364-415edf649e91",
      "parentRepliesLink":"https://.../forums/atom/replies?topicUuid=8fd51c01-6505-4d78-b364-415edf649e91"
  },
  "resultData":{
      "replyID":"urn:lsid:ibm.com:forum:815b1a6d-5a3c-4730-91d2-094075ff2e5d"
  }
}
```

If the `createReply` action fails, the forums data sink returns a JSON object as seen in the following sample:

```
{
  "status":"error",
  "message":"Your reply could not be created. If the problem persists, contact the system administrator.",
  "formData":{
      "action.uri":"forums:sr:8fd51c01-6505-4d78-b364-415edf649e91",
      "action":"createReply",
      "parentEntryLink":"https://.../forums/atom/topic?topicUuid=8fd51c01-6505-4d78-b364-415edf649e91",
      "parentRepliesLink":"https://.../forums/atom/replies?topicUuid=8fd51c01-6505-4d78-b364-415edf649e91",
      "replyTitle":"My Forum Topic Reply",
      "replyContent":"This is my reply to the forum topic."
  }
}
```

!!! note
    The `formData` property contains the actual form input, which includes all additional form data that you submit. If the action is successful, the `replyTitle` and `replyContent` are not returned to the caller.


