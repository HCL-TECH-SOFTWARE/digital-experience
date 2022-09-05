---
id: wcm_reference-numbers
title: Use Formatting Numbers
---


The Java Number Format Pattern Syntax is used to set the format of numbers.

|Symbol|Meaning.|
|------|--------|
|`0`|Represents a digit. Leading and trailing zeros are shown.|
|`#`|Represents a digit. Leading and trailing zeros are not shown.|
|`.`|A placeholder for decimal separator.|
|`,`|A placeholder for grouping separator.|
|`E`|Used to separate a mantissa and exponent in exponential formats.|
|`;`|Used to separate formats.|
|`-`|The default negative prefix.|
|`%`|Multiplies the number by 100 and displays it as a percentage.|
|`?`|Multiplies the number by 1000 and displays it per mille.|
|`¤`|Displays the number as a currency.|
|`'`|Used to quote special characters in a prefix or suffix.|

## Examples:

For the number 123456.789.

|Format Pattern|Result|
|--------------|------|
|`###,###.###`|123,456.789|
|`###.##`|123456.79|
|`00000000.0000`|000123456.7890|

