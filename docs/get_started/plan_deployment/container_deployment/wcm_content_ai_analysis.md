# WCM Content AI Analysis

This topic describes how you can enable AI analysis for a WCM Content in Kubernetes Deployment. This also mentions details on how you can configure, which content AI provider(XAI or OpenAI ChatGPT) to be used for AI analysis. The AI analysis for a WCM Content feature is available from HCL Digital Experience 9.5 Container Update CF213 and later.

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
## Enabling AI Analysis in Helm Chart

The `content-ai` configurations are available in the Helm Chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) file as `contentAI`.

The administrator can enable AI analysis for content in the `configuration` section of the ```core``` which is mentioned below.

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for content AI 
    contentAI:
      # Configures if content AI is enabled/disabled
      enabled: false
      # Settings for checking content AI provider. When contentAI enabled is true, provider will be used.
      provider: ""
```

For enabling AI analysis for content set ```enabled``` as ```true``` inside the contentAI section and also specify Content AI provider to be used in ```provider``` property. Possible values for provider are ```XAI``` or ```OPEN_AI```.

!!! note

    It is mandatory to specify provider to be used when contentAI is enabled.

### Configuring Custom Secret or API Key of Content AI Provider

API Key or Custom Secret of Content AI Provider can be configured in the `security` section of the ```core``` which is mentioned below.

```yaml
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Core
  core:
    # Security configuration for AI APIs: 
    # API key for AI Provider
    contentAIProviderAPIKey: ""
    # Provide a secret name that will be used to set AI API Keys
    customContentAISecret: ""
```

- Once AI analysis is enabled, the administrator need to specify the Content AI provider's API key in ```contentAIProviderAPIKey``` property. 
- If in case custom secret needs to be used instead of API key directly in values.yaml then custom secret needs to be created using Content AI provider's API key, and then reference the secret name in ```customContentAISecret``` property and ```contentAIProviderAPIKey``` can be left blank in this case. 

!!! note

    It is mandatory to specify API key in ```contentAIProviderAPIKey``` or custom secret in ```customContentAISecret``` property when contentAI is enabled.

## Disabling AI Analysis in Helm Chart

The `content-ai` configurations are available in the Helm Chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) file as `contentAI`.

The administrator can disable AI analysis for content in the `configuration` section of the ```core``` which is mentioned below.

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for content AI 
    contentAI:
      # Configures if content AI is enabled/disabled
      enabled: false
      # Settings for checking content AI provider. When contentAI enabled is true, provider will be used.
      provider: ""
```

For disbaling AI analysis for content set ```enabled``` as ```false``` inside the contentAI section

## Custom Configurations for AI Analysis

If you like to customize some of the AI analysis related Configurations, you need to Login to WAS console for customizing any of the below mentioned custom properties in WCM Config Service (Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties)
### OpenAI ChatGPT specific custom configurations

1. ```OPENAI_MODEL```: Currently supported AI model is ```text-davinci-003```. However, you can override the model by overriding this property.
2. ```OPENAI_MAX_TOKENS``` : Set any positive integer values between 1 and 2048 for GPT-3 models like ```text-davinci-003```. It specifies the maximum number of tokens that the model can output in its response.
3. ```OPENAI_TEMPERATURE``` : Set any positive float values ranging from ```0.0``` to ```1.0```. This parameter in OpenAI's GPT-3 API controls the randomness and creativity of the generated text, with higher values producing more diverse and random output and lower values producing more focused and deterministic output.

Once Content AI analysis is enabled in DX deployment you can start using [WCM REST V2 AI Analysis API](../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) for calling AI Analyzer API's of Content AI Provider you have configured.