---
title: AI analyzer API for content
---

# AI analyzer API for content

Starting with version 95_CF213 the product contains a new WCM REST v2 API for sentimental analysis of a content, keyword extraction from the content and also auto summarization of content element.

## WCM REST V2 API explorer

The WCM REST V2 API explorer allows developers using the Digital Experience WCM REST APIs to explore and test these APIs. 

Access the WCM REST V2 API explorer located at:

```
http or https://host:port/dx/api/wcm/v2/explorer/
```

!!! example

    ```
    https://localhost:10039/dx/api/wcm/v2/explorer/
    ```

### How to use REST with AI analyzer API for content
#### Request Details

Once you access WCM REST V2 API explorer, you can access AI analyzer API endpoint like below

-   POST request to:

    ```
    https://localhost:10039/wps/mycontenthandler/wcmrest-v2/contents/analysis
    ```

Sample Request body you can use to trigger ```/contents/analysis``` API is as follows.

```
{
  "title": {
    "lang": "en",
    "value": "GetAIAnalysis"
  },
  "name": "GetAIAnalysis",
  "type": "Content",
  "status": "PUBLISHED",
  "libraryID": "libraryID",
  "parentID": "parentID",
  "templateID": "templateID",
  "data": {
    "comp ref name": {
      "name": "comp ref name",
      "title": {
        "lang": "en",
        "value": "comp ref title"
      },
      "type": "ReferenceComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "reference": ""
      }
    },
    "date name": {
      "name": "date name",
      "title": {
        "lang": "en",
        "value": "date title"
      },
      "type": "DateComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml"
      }
    },
    "file name": {
      "name": "file name",
      "title": {
        "lang": "en",
        "value": "file title"
      },
      "type": "FileComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml"
      }
    },
    "html name": {
      "name": "html name",
      "title": {
        "lang": "en",
        "value": "html title"
      },
      "type": "HTMLComponent",
      "data": {
        "type": "text/html",
        "value": "<html><body><p>The Waterfall project management method, the Unified Modeling Language (UML) for modeling software or the Unified Process are as valid of an approach as agile methodoligies like Scrum or SAFe, using user stories to define requirements or dividing your development work into sprints.</p></body></html>"
      }
    },
    "image name": {
      "name": "image name",
      "title": {
        "lang": "en",
        "value": "image title"
      },
      "type": "ImageComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "image": {
          "dimension": {
            "height": "",
            "width": "",
            "border": "0"
          },
          "altText": "",
          "tagName": "",
          "renditionList": {}
        }
      }
    },
    "jsp name": {
      "name": "jsp name",
      "title": {
        "lang": "en",
        "value": "jsp title"
      },
      "type": "JSPComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "jsp": {
          "path": ""
        }
      }
    },
    "link name": {
      "name": "link name",
      "title": {
        "lang": "en",
        "value": "link title"
      },
      "type": "LinkComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "linkElement": {
          "destination": {
            "type": "external",
            "allowClear": false,
            "value": ""
          },
          "display": {
            "type": "title"
          },
          "description": {
            "useDestination": false,
            "value": ""
          },
          "target": "None",
          "additionalAttributes": ""
        }
      }
    },
    "number name": {
      "name": "number name",
      "title": {
        "lang": "en",
        "value": "number title"
      },
      "type": "NumericComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "double": 44.4
      }
    },
    "opt select name": {
      "name": "opt select name",
      "title": {
        "lang": "en",
        "value": "opt select title"
      },
      "type": "OptionSelectionComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "optionselection": {
          "displaytype": "Automatic",
          "selection": "UserDefined",
          "options": {
            "mode": "Singleselect"
          }
        }
      }
    },
    "rich text name": {
     "name": "rich text name",
      "title": {
        "lang": "en",
        "value": "rich text title"
      },
      "type": "RichTextComponent",
      "data": {
        "type": "text/html",
        "value": "You can debate the approach to programming and software engineering forever, especially on a philosophical level."
      }
    },
    "short text name": {
      "name": "short text name",
      "title": {
        "lang": "en",
        "value": "short text title"
      },
      "type": "ShortTextComponent",
      "data": {
        "type": "text/plain",
        "value": "It’s always very easy for programmers to get into debates about how to organize, what version control to use, how to design, draft and build software."
      }
    },
    "text name": {
      "name": "text name",
      "title": {
        "lang": "en",
        "value": "text title"
      },
      "type": "TextComponent",
      "data": {
        "type": "text/plain",
        "value": "Everyone has a different approach, different preferences and a different view on things."
      }
    },
    "selection name": {
      "name": "selection name",
      "title": {
        "lang": "en",
        "value": "selection title"
      },
      "type": "UserSelectionComponent",
      "data": {
        "type": "application/vnd.ibm.wcm+xml",
        "userSelection": {}
      }
    }
    }
}
```

#### Response details for Summary Analysis
When request parameter selected is summary, sample response of content analysis contains auto-summarization details for description field, inside the response as follows:

```
"description": {
    "lang": "en",
    "value": "AI generated description"
  }
```

#### Response details for Keyword Extraction
When request parameter selected is keywords, sample response of content analysis contains extracted keywords for content, inside the response as follows:

```
"profile": {
    "keyword": [
      "keywords",
      "from",
      "AI",
      "Analysis"
    ]
  }
```

#### Response details for Sentimental Analysis
When request parameter selected is sentiment, sample response of content analysis contains sentimental analysis for content, inside the response as follows:

```
"sentiment": "POSITIVE",
```

Note: If you need sentiment analysis for a specific content element, please specify content element as the value for optional request parameter sentimentElement, so that you can get sentimental analysis for that element only.
### Current API capabilities and limitations

- Only Text Elements (Plain texts/ Rich Texts) are supported and will be used for AI analysis
- Only Content Elements are used for AI analysis. In other words, only those components within the elements data array (Refer above request body's "data": {} item to understand more) are used for AI analysis and other fields in parent level like description, name and title of content are not used for AI analysis.
- If value of request parameter selected is summary: By default extractive summarization is done during analysis. If you need analysis that provides abstractive summarization, then summarization method of type as abstractive needs to be specified.

For more understanding on the API request and response details, refer ```/contents/analysis``` API with method type as ```POST``` in the swagger REST API documentation at ```http or https://host:port/dx/api/wcm/v2/explorer/```