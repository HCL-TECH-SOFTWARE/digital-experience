# WCM Content AI Analysis

This topic describes how to enable AI analysis for a WCM Content in the traditional on-premise deployment. This also mentions details on how to configure, which content AI provider(XAI or OpenAI ChatGPT) to be used for AI analysis. The AI analysis for a WCM Content feature is available from HCL Digital Experience 9.5 Container Update CF213 and later.

## Content AI Providers Overview

### XAI Overview

- XAI is an machine learning team inside HCL Software​
- XAI works to identify machine learning use cases and collaborate with teams across the HCL portfolio​
- XAI team is focused on delivering high value ML-based capabilities that address existing visions​
- XAI accelerate development through model & skill reusability
- XAI is free of charge for HCL DX customers - an API key can be obtained by opening a support ticket with HCL Software

### OpenAI ChatGPT Overview

- OpenAI is the company behind ChatGPT. 
- OpenAI is an AI research and deployment company. There are lots of articles available describing the history and various features provided. 
- Chatgpt provides API access via API key that are received after signing up for it. After signing up at https://platform.openai.com/playground a personal account with limited access or corporate account can be created. The playground can used to experiment with the API as well. What is somewhat special about the API is that it accepts natural language commands just like the chatgpt chatbot.
- For privacy and API availability and other conditions see the OpenAI website or contact the OpenAI team.

## Config Engine Task for enabling Content AI analysis

In order to enable content AI analysis, connect to DX Core and run the below specified config engine task.

```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-configure-wcm-content-ai-service -DContentAIProvider=XAI -DContentAIProviderAPIKey={APIKey} -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

- Possible values that can be set for ```ContentAIProvider``` parameter is ```XAI``` or ```OPEN_AI```
- Depending on the ContentAIProvider that is set, set the correct APIKey of the respective provider in the ```ContentAIProviderAPIKey``` parameter.

Once config engine task is successfully ran, validate that all the required configurations are successfully added that are mentioned below.

Login to WAS console and verify that the ```AI_CLASS``` configuration property is added in WCM Config Service (Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties). Possible values for ```AI_CLASS``` are ```com.hcl.workplace.wcm.restv2.ai.ChatGPTAnalyzerService``` (If ```ContentAIProvider``` value is set as ```OPEN_AI```) or ```com.hcl.workplace.wcm.restv2.ai.XAIAnalyzerService``` (If ```ContentAIProvider``` value is set as ```XAI```).

![](../wcm_env/_img/AI_Provider_Class.png)

Login to DX Portal and verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is configured using AI Content Provider's API Key at the path Administration -> Security -> Credential Vault -> Manage System Vault Slot

![](../wcm_env/_img/AI_Provider_APIKey_Vault.png)

!!! note

    If in case any of the above configurations are not added via config engine task, configure needs to be done manually.

## Config Engine Task for disabling Content AI analysis

```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-remove-wcm-content-ai-service -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

Once config engine task is successfully ran, validate that all the required configurations are successfully deleted that are mentioned below.

1. Login to WAS console and verify that the ```AI_CLASS``` configuration property is deleted from WCM Config Service.
2. Login to DX Portal and verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is deleted.

!!! note

    If in case any of the above configurations are not deleted via config engine task, they should be deleted manually.

## Custom Configurations for AI Analysis

If AI analysis related Configurations needs Customization, Login to WAS console for customizing any of the below mentioned custom properties in WCM Config Service (Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties)
### OpenAI ChatGPT specific custom configurations

1. ```OPENAI_MODEL```: Currently supported AI model is ```text-davinci-003```. However, AI model can be overriden by overriding this property.
2. ```OPENAI_MAX_TOKENS``` : Set any positive integer values between 1 and 2048 for GPT-3 models like ```text-davinci-003```. It specifies the maximum number of tokens that the model can output in its response.
3. ```OPENAI_TEMPERATURE``` : Set any positive float values ranging from ```0.0``` to ```1.0```. This parameter in OpenAI's GPT-3 API controls the randomness and creativity of the generated text, with higher values producing more diverse and random output and lower values producing more focused and deterministic output.

Once Content AI analysis is enabled in DX deployment, use [WCM REST V2 AI Analysis API](../../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) for calling AI Analyzer API's of configured Content AI Provider.
