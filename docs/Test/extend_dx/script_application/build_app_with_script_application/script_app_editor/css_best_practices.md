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


