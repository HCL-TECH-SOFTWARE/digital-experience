# WCM Content AI Analysis

This topic describes how you can enable AI analysis for a WCM Content in the traditional on-premise deployment. This also mentions details on how we can configure, which content AI provider(XAI or OpenAI ChatGPT) to be used for AI analysis. The AI analysis for a WCM Content feature is available from HCL Digital Experience 9.5 Container Update CF213 and later.

## Content AI Providers Overview

### XAI Overview

- XAI is an machine learning team inside HCL Software​
- XAI works to identify machine learning use cases and collaborate with teams across the HCL portfolio​
- XAI team is focused on delivering high value ML-based capabilities that address existing visions​
- XAI accelerate development through model & skill reusability

### OpenAI ChatGPT Overview

- OpenAI is the company behind ChatGPT. 
- OpenAI is an AI research and deployment company. Our mission is to ensure that artificial general intelligence benefits all of humanity. There are lots of articles available describing the history and various features provided. 
- Chatgpt provides API access via API key that you receive after signing up for it. After signing up at https://platform.openai.com/playground a personal account with limited access can be created. The playground can used to experiment with the API as well. What is somewhat special about the API is that it accepts natural language commands just like the chatgpt chatbot.

## Config Engine Task for enabling Content AI analysis

In order to enable content AI analysis, you need to connect to DX Core and run the below specified config engine task.

```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-configure-wcm-content-ai-service -DContentAIProvider=XAI -DContentAIProviderAPIKey={APIKey} -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

- Possible values you can set for ```ContentAIProvider``` parameter is ```XAI``` or ```OPEN_AI```
- Depending on the ContentAIProvider you set, you need to set correct APIKey of the respective provider in the ```ContentAIProviderAPIKey``` parameter.

Once config engine task is successfully ran, validate that all the required configurations are successfully added that are mentioned below.

Login to WAS console and verify that the ```AI_CLASS``` configuration property is added in WCM Config Service (Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties). Possible values for ```AI_CLASS``` are ```com.hcl.workplace.wcm.restv2.ai.ChatGPTAnalyzerService``` (If you have set ```ContentAIProvider``` value as ```OPEN_AI```) or ```com.hcl.workplace.wcm.restv2.ai.XAIAnalyzerService``` (If you have set ```ContentAIProvider``` value as ```XAI```).

![](../wcm_env/_img/AI_Provider_Class.png)

Login to DX Portal and verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is configured using AI Content Provider's API Key at the path Administration -> Security -> Credential Vault -> Manage System Vault Slot

![](../wcm_env/_img/AI_Provider_APIKey_Vault.png)

!!! note

    If in case any of the above configurations are not added via config engine task, you need to configure them manually.

## Config Engine Task for disabling Content AI analysis

```/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh action-remove-wcm-content-ai-service -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin```

Once config engine task is successfully ran, validate that all the required configurations are successfully deleted that are mentioned below.

1. Login to WAS console and verify that the ```AI_CLASS``` configuration property is deleted from WCM Config Service.
2. Login to DX Portal and verify that the Credential Vault with the Vault slot Name  ```ai.auth``` is deleted.

!!! note

    If in case any of the above configurations are not deleted via config engine task, you need to delete them manually.

## Custom Configurations for AI Analysis

If you like to customize some of the AI analysis related Configurations, you need to Login to WAS console for customizing any of the below mentioned custom properties in WCM Config Service (Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties)
### OpenAI ChatGPT specific custom configurations

1. ```OPENAI_MODEL```: Currently supported AI model is ```text-davinci-003```. However, you can override the model by overriding this property.
2. ```OPENAI_MAX_TOKENS``` : Set any positive integer values between 1 and 2048 for GPT-3 models like ```text-davinci-003```. It specifies the maximum number of tokens that the model can output in its response.
3. ```OPENAI_TEMPERATURE``` : Set any positive float values ranging from ```0.0``` to ```1.0```. This parameter in OpenAI's GPT-3 API controls the randomness and creativity of the generated text, with higher values producing more diverse and random output and lower values producing more focused and deterministic output.

Once Content AI analysis is enabled in DX deployment you can start using [WCM REST V2 AI Analysis API](../../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) for calling AI Analyzer API's of Content AI Provider you have configured.