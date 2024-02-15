# Navigation - Themes and Skins

The Look bean is a simple lookup mechanism to access the name and ID of the available themes and skins. It does not support a current selection, nor navigation of the matrix relation between both sets. Since that might change in the future, the deselect command is implemented. It can be used before searches to ensure that the search is global, even if a current selection is introduced in the future.

Jython example:

```
Look.deselect()
```

Jacl example:

```
$Look deselect
```


