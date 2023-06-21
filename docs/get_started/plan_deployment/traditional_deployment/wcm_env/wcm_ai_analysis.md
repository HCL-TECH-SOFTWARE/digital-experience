# WCM Content AI Analysis

This topic describes how to enable AI analysis for a WCM Content in the traditional on-premise deployment. This also discusses steps on how to configure a content AI provider (for example, XAI or OpenAI ChatGPT) to be used for AI analysis. The AI analysis for a WCM Content feature is available from HCL Digital Experience 9.5 Container Update CF213 and higher.

## Content AI Providers Overview

### XAI Overview

Explainable artificial intelligence (XAI) is a machine learning team in HCL Software. It identifies machine learning use cases and collaborates with teams across the HCL portfolio. The XAI team is focused on delivering high value maching learning-based capabilities that address existing visions. XAI accelerates development through model and skill reusability. It is free of charge for HCL DX customers; you can obtain an API key by opening a support ticket with HCL Software.

### OpenAI ChatGPT Overview

OpenAI is the AI research and deployment company behind ChatGPT. When you sign up with ChatGPT, it provides API access via an API key. After signing up at [https://platform.openai.com/playground](https://platform.openai.com/playground), you can create a personal account with limited access or a corporate account. The playground can be used to experiment with the API as well. A highlight of the API is that it accepts natural language commands similar to the ChatGPT chatbot. 

For privacy and API availability and other conditions, see the [OpenAI](https://openai.com) website or contact the OpenAI team.

## Config Engine Task for enabling Content AI analysis

To enable content AI analysis:

1. Connect to DX Core and run the following specified config engine task.

    ```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-configure-wcm-content-ai-service -DContentAIProvider=XAI -DContentAIProviderAPIKey={APIKey} -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

    !!!note
        - Possible values for ```ContentAIProvider``` parameter are ```XAI``` or ```OPEN_AI```.
        - Depending on the ContentAIProvider, set the correct API key of the respective provider in the ```ContentAIProviderAPIKey``` parameter.

2. Validate that all the required configurations are added.

    1. Log in to WAS console.
    2. Verify that the ```AI_CLASS``` configuration property is added in WCM Config Service by going to **Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties**. Possible values for ```AI_CLASS``` are:
        - ```com.hcl.workplace.wcm.restv2.ai.ChatGPTAnalyzerService``` (igf ```ContentAIProvider``` value is set as ```OPEN_AI```) 
        - ```com.hcl.workplace.wcm.restv2.ai.XAIAnalyzerService``` (if ```ContentAIProvider``` value is set as ```XAI```)

        ![](../wcm_env/_img/AI_Provider_Class.png)

    3. Log in to the DX Portal.
    4. Verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is configured using the AI content provider's API key by going to **Administration > Security > Credential Vault > Manage System Vault Slot**.

        ![](../wcm_env/_img/AI_Provider_APIKey_Vault.png)
        
## Config Engine Task for disabling Content AI analysis

To disable content AI analysis:

1. Connect to DX Core and run the following specified config engine task.

    ```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-remove-wcm-content-ai-service -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

2. Validate that all the required configurations are deleted.

    1. Log in to WAS console.
    2. Verify that the ```AI_CLASS``` configuration property is deleted from WCM Config Service.
    3. Log in to the DX Portal.
    4. Verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is deleted.


## Custom Configurations for AI Analysis

If AI analysis-related configurations needs customization, log in to WAS console for customizing any of the custom properties in WCM Config Service (**Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties**).

### OpenAI ChatGPT specific custom configurations

1. ```OPENAI_MODEL```: Currently supported AI model is ```text-davinci-003```. However, AI model can be overriden by overriding this property.
2. ```OPENAI_MAX_TOKENS```: Set any positive integer values between 1 and 2048 for GPT-3 models like ```text-davinci-003```. It specifies the maximum number of tokens that the model can output in its response.
3. ```OPENAI_TEMPERATURE```: Set any positive float values ranging from ```0.0``` to ```1.0```. This parameter in OpenAI's GPT-3 API controls the randomness and creativity of the generated text, with higher values producing more diverse and random output and lower values producing more focused and deterministic output.

After enabling the Content AI analysis in DX deployment, use the [WCM REST V2 AI Analysis API](../../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) to call the AI Analyzer APIs of the configured Content AI Provider.
