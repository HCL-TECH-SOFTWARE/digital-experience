# WCM Content AI Analysis

You can enable AI analysis for web content management (WCM) content in a Kubernetes deployment. You can also configure a content AI provider to be used for AI analysis. The AI analysis for a WCM content feature is available from HCL Digital Experience 9.5 Container Update CF213 and higher.

!!!note
	OpenAI ChatGPT is the supported content AI provider for CF213 and later. Custom AI implementation is supported for CF214 and later.

## Content AI provider overview

### OpenAI ChatGPT overview

OpenAI is the AI research and deployment company behind ChatGPT. When you sign up with ChatGPT, it provides API access through an API key. After signing up at [https://platform.openai.com/playground](https://platform.openai.com/playground), you can create a personal account with limited access or a corporate account. You can use the playground to experiment with the API too. A highlight of the API is that it accepts natural language commands similar to the ChatGPT chatbot. 

For privacy and API availability and other conditions, see the [OpenAI](https://openai.com) website or contact the OpenAI team.

## Enabling AI Analysis in Helm chart

The `content-ai` configurations are available in the Helm chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) file as `contentAI`.

The administrator can enable AI analysis for content in the `configuration` section of the ```core``` as shown in the following example.

!!!note
    When you upgrade from older CF versions (for example, CF212) to CF213 or later to enable AI analysis, you can complete the configuration during during the `helm upgrade`.

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for content AI 
    contentAI:
      # Configures if content AI is enabled/disabled
      enabled: true
      # Settings for checking content AI provider. When enabled is true, provider will be used 
      # and possible values are 'OPEN_AI' or 'CUSTOM'
      provider: "CUSTOM"
      className: "com.ai.sample.CustomerAI"
```

For enabling AI analysis for content, set ```enabled``` as ```true``` inside the contentAI section. You must specify the content AI provider to be used in the ```provider``` property. Possible values for the provider are ```OPEN_AI``` or ```CUSTOM```.

### Configuring an AI class for a custom content AI provider

Only administrators can configure an AI class to use a custom content AI provider.

To configure a custom AI class:

1. Write the custom content AI provider class by implementing the ```com.hcl.workplace.wcm.restv2.ai.IAIGeneration``` interface.

    1. Create the `JAR` file.

	  2. Put the JAR file either in a custom-shared library or in ```/opt/HCL/wp_profile/PortalServer/sharedLibrary```.

	  3. Restart the JVM.

    The following example of a custom content AI provider class can be used to call custom AI services for AI analysis. 

    ```
    package com.ai.sample;

    import java.util.ArrayList;
    import java.util.List;
    import com.hcl.workplace.wcm.restv2.ai.IAIGeneration;
    import com.ibm.workplace.wcm.rest.exception.AIGenerationException;

    public class CustomerAI implements IAIGeneration {

      @Override
      public String generateSummary(List<String> values) throws AIGenerationException {
        // Call the custom AI Service to get the custom AI generated summary
        return "AIAnalysisSummary";
      }

      @Override
      public List<String> generateKeywords(List<String> values) throws AIGenerationException {
        // Call the custom AI Service to get the custom AI generated keywords
        List<String> keyWordList = new ArrayList<String>();
        keyWordList.add("keyword1");
        return keyWordList;
      }

      @Override
      public Sentiment generateSentiment(List<String> values) throws AIGenerationException {
        // Call the custom AI Service to get the custom AI generated sentiment
        return Sentiment.POSITIVE;
      }

    }
    ```

2. Configure the content AI provider class in the Helm chart and run ```helm upgrade```.
<!-- Did the preceding steps take the admin through configuring. It looks a though the actual configuring happens after the last step. -->

### Configuring a custom cecret or API Key for the content AI provider

The API key or custom secret of a content AI provider can be configured in the `security` section of the ```core```, as shown in the following example.

```yaml
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Core
  core:
    # Security configuration for AI APIs: 
    # API key for AI Provider
    contentAIProviderAPIKey: ""
    # Provide a secret name that will be used to set AI API Keys
    customContentAISecret: "sample-core-content-ai-secret"
```

!!!important
    After AI analysis is enabled, the administrator must specify the content AI provider's API key in the ```contentAIProviderAPIKey``` property. 

    If a custom secret is used instead of an API key directly in the `values.yaml` file, then the custom secret must be created by using the content AI provider's API key. You must then refer to the secret name in the ```customContentAISecret``` property and you can leave the ```contentAIProviderAPIKey``` blank. 

For more information, see [Guidelines for Configuring Credentials from Secrets](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_credentials.md#guidelines-for-configuring-credentials-from-secrets).

## Disabling AI analysis in the Helm chart

The `content-ai` configurations are available in the Helm chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) file as `contentAI`.

The administrator can disable AI analysis for content in the `configuration` section of the ```core```, as shown in the following example.

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

For disbaling AI analysis for content, set ```enabled``` as ```false``` inside the contentAI section. Specifying the provider is not required to disable AI analysis.

## Custom configurations for AI analysis

To customize AI analysis-related configurations, log in to the WAS <!-- Do you mean WebSphere Application Server here? Don't abbreviate other company's product names. --> console for customizing any of the custom properties in the WCM config service. Click **Resource > Resource Environment > Resource Environment Providers > WCM_WCMConfigService > Custom Properties**.

### OpenAI ChatGPT specific custom configurations

- ```OPENAI_MODEL```: Currently supported AI model is ```text-davinci-003```. However, the model can be overidden by overriding this property.
- ```OPENAI_MAX_TOKENS```: Set any positive integer values between 1 and 2048 for GPT-3 models like ```text-davinci-003```. It specifies the maximum number of tokens that the model can output in its response.
- ```OPENAI_TEMPERATURE```: Set any positive float values ranging from ```0.0``` to ```1.0```. This parameter in OpenAI's GPT-3 API controls the randomness and creativity of the generated text. Higher values produce more diverse and random output, and lower values produce more focused and deterministic output.

After enabling the content AI analysis in DX deployment, use the [WCM REST V2 AI Analysis API](../../../manage_content/wcm_development/wcm_rest_v2_ai_analysis/index.md) to call the AI analyzer APIs of the configured content AI provider.