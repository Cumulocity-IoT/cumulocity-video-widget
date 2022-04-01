/**
 * /*
 * Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @format
 */

import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';

var Hls = require('hls.js');


@Component({
    selector: "lib-cumulocity-video-widget",
    templateUrl: "./cumulocity-video-widget.component.html",
    styleUrls: ["./cumulocity-video-widget.component.css"],
})
export class CumulocityVideoWidget implements AfterViewInit {
    // access the declared DOM element; expose all methods and properties
    @ViewChild('videoPlayer',{'static':true}) videoElementRef!: ElementRef;
  
    // declare and inherit the HTML video methods and its properties
    videoElement!: HTMLVideoElement;

    @Input() config;

    constructor() {
    }

    async ngAfterViewInit(): Promise<void> {
        // the element could be either a wrapped DOM element or a nativeElement
        this.videoElement = this.videoElementRef.nativeElement;

        if (Hls.isSupported()) {
            console.log("Video streaming supported by HLSjs");

            var hls = new Hls();
            //hls.loadSource('https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8');
            hls.loadSource(this.config.streamURL);
            hls.attachMedia(this.videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                this.videoElement.play();
            });
        }
        //"http://a.files.bbci.co.uk/media/live/manifesto/audio_video/simulcast/hls/uk/abr_hdtv/ak/bbc_one_hd.m3u8"
        return;
    }


}
