# Video Widget for Cumulocity IoT

This widget allows streaming videos from sources such as HLS streams, on-demand videos (such as MP4, MKV, MOV) from URL and embedded YouTube, Vimeo, etc. videos. In addition, on-demand videos can be synchronized with device measurements representing video timestamp in seconds. Please note that links must be HTTPS and have Cross-Origin access enabled.

![Preview](src/cumulocity-video-widget/assets/img-preview.png)

### Installation - for the dashboards using Runtime Widget Loader
1. Download the latest `cumulocity-video-widget-{version}.zip` file from the Releases section.
2. Make sure you have Application Builder app installed.
3. Open a dashboard.
4. Click `more...`.
5. Select `Install Widget` and follow the instructions.

### Configuration - to add the widget on dashboard
1. Make sure you have successfully installed the widget.
2. Click on `Add widget`.
3. Choose `Video` widget.
4. `Title` is the title of widget. Provide a relevant name. You may choose to hide this. Go to `Appearance` tab and choose `Hidden` under `Widget header style`.
5. `Target assets or devices` is to select the device. Only select device if you need to synchronize video timestamp with device measurements.
6. `Upload playlist` is to upload a playlist file. Only .m3u playlist file is supported.
7. `Source type` is whether the video is streamed, on-demand or embedded.
8. `Title` is a name for the video to appear in playlist.
9. `URL` is the url of the video.
10. `Delete icon` is to delete a source from the list. Only visible when there more than one source.
11. `Add source` is to add a new source to the list.
12. `Playlist & buttons position` allows to hide the playlist and buttons or show it on top or bottom of the video.
13. `Autoplay` is whether video should start playing automatically after page load.
14. `Default source` is the video that will be played by default on page load.
15. `Loop` is whether the video needs to be replayed. It is only applicable if the default source is of type on-demand.
14. `Measurement` is the device measurements coming in seconds to which video timestamp needs to be synchornized. It is only applicable if the default source is of type on-demand.
15. Click `Save` to add the widget on the dashboard.
16. In case you see unexpected results on the widget, refer to browser console to see if there are error logs.

### Development - to do the enhancements and testing locally
1. Clone the repository on local machine using `git clone https://github.com/SoftwareAG/cumulocity-video-widget.git`.
2. Run `npm install` to download the module dependencies.
3. Install c8ycli `npm install -g @c8y/cli` if not already.
4. Run `c8ycli server -u https://your_tenant_url` to start the server.
5. Go to `http://localhost:9000/apps/cockpit/` in the browser to view and test your changes.
6. (Optional) push the changes back to this repository.

### Build - to create a new build for the Runtime Widget Loader
1. Finish the development and testing on your local machine.
2. Run `gulp` to start the build process. Run `npm install -g gulp` to install gulp if not already.
3. Use `cumulocity-video-widget-{version}.zip` file in the `dist` folder as a distribution.

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.

------------------------------

For more information you can Ask a Question in the [Tech Community Forums](https://tech.forums.softwareag.com/tags/c/forum/1/Cumulocity-IoT).
  
  
You can find additional information in the [Software AG Tech Community](https://tech.forums.softwareag.com/tag/Cumulocity-IoT).
