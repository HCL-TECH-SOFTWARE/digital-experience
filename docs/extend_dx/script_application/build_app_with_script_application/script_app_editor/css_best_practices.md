# CSS best practices

If your code uses a map, or another element that has no fixed height, you must give it an explicit height, such as `400px vs 50%`.

Use `100%` as the value width so that the page and layout can manage the width that the application uses. For height, choose a reasonable value. For example:

```
#map-canvas {
          height: 400px;
          width: 100%;
          }
          vs
          #map-canvas {
          height: 50%;
          width: 100%;
          }
```

If the script uses styles with absolute positions, such as `position: absolute;`, consider choosing relative positions instead, such as `position: relative;`. Otherwise, the item is likely to be positioned outside of the application space.

## HCLSoftware U learning materials

To learn about Script Applications, go to [Script Application](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3655){target="_blank"}. You can try it out using the [Script Application Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application.pdf){target="_blank"} and corresponding [Script Application Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Script_Application_Lab_Resources.zip){target="_blank"}.
