/*
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
 */
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: "cumulocity-video-widget-config-component",
    templateUrl: "./cumulocity-video-widget.config.component.html",
    styleUrls: ["./cumulocity-video-widget.config.component.css"]
})
export class CumulocityVideoWidgetConfig implements OnInit, OnDestroy {

    @Input() config: any = {};

    public defaultSource;

    ngOnInit(): void {
        // Editing an existing widget
        if(_.has(this.config, 'customWidgetData')) {
            this.config.customWidgetData = _.get(this.config, 'customWidgetData');
            this.config.customWidgetData.sources.forEach((source) => {
                if(source.selected === true) {
                    this.defaultSource = source;
                }
            });
        } else { 
            // Adding a new widget
            this.config.customWidgetData = {
                sources: [{
                    type: 'stream',
                    title: '',
                    url: '',
                    sanitizedUrl: '',
                    selected: true
                }],
                player: {
                    autoplay: 1
                },
                playlist: {
                    hide: 0
                }
            };
            this.defaultSource = this.config.customWidgetData.sources[0];
        }
    }

    public addSource() {
        this.config.customWidgetData.sources.push({
            type: 'stream',
            title: '',
            url: '',
            sanitizedUrl: '',
            selected: false
        });
    }

    public removeSource(i) {
        this.config.customWidgetData.sources.splice(i, 1);
    }

    public changeDefaultSource(newDefaultSource) {
        this.config.customWidgetData.sources.forEach((source) => {
            if(source.title === newDefaultSource.title && source.url === newDefaultSource.url && source.type === newDefaultSource.type) {
                source.selected = true;
                newDefaultSource.selected = true;
                this.defaultSource = newDefaultSource;
            } else {
                source.selected = false;
            }
        });
    }

    ngOnDestroy(): void {
        //unsubscribe from observables here
    }

}