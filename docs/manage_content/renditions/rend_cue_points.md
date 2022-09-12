# Video Start and End Points

File components or elements that have a video file that is stored in an HTML5 video format, which includes MP4, webM, or ogg, are stored in Brightcove and have a Brightcove ID.

The video can be previewed in the content form and you can set starting and ending points for the video.

The following code is an HTML5 video player sample:

```
<video class="videoPlayer" controls="" preload="metadata" src='[Element context="current" 
type="content" key="file" format="url"]#t=[Element context="current" type="content" key="file" 
format="startTime_sec"],[Element context="current" type="content" key="file" format="endTime_sec"]'>
         Your browser does not support the video tag.
   </video>
```

The starting and ending points can be retrieved with the component or element tag and the parameter format="startTime" or format="endTime", which return the time in seconds. startTime\_msec and endTime\_msec return the time in milliseconds.

The starting point frame is also used to generate the thumbnail of the video. The thumbnail can be retrieved with the parameter rendition="thumbnail".

## Limitation

The interactive cue point preview player in the content authoring form uses HTML 5 Media Fragment Identifiers for setting the start and end points of the video in the preview frame. Internet Explorer version 11 and earlier does not support these identifiers.


