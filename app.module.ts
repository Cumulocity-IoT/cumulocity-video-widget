/** @format */

import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule as NgRouterModule } from "@angular/router";
import { UpgradeModule as NgUpgradeModule } from "@angular/upgrade/static";
import { CoreModule, HOOK_COMPONENTS, RouterModule } from "@c8y/ngx-components";
import { DashboardUpgradeModule, UpgradeModule, HybridAppModule, UPGRADE_ROUTES } from "@c8y/ngx-components/upgrade";
import { AssetsNavigatorModule } from "@c8y/ngx-components/assets-navigator";
import { CockpitDashboardModule } from "@c8y/ngx-components/context-dashboard";
import { ReportsModule } from "@c8y/ngx-components/reports";
import { SensorPhoneModule } from "@c8y/ngx-components/sensor-phone";
import { CumulocityVideoWidgetConfig } from "./src/cumulocity-video-widget/cumulocity-video-widget.config.component";
import { CumulocityVideoWidget } from "./src/cumulocity-video-widget/cumulocity-video-widget.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(),
        NgRouterModule.forRoot([...UPGRADE_ROUTES], { enableTracing: false, useHash: true }),
        CoreModule.forRoot(),
        AssetsNavigatorModule,
        ReportsModule,
        NgUpgradeModule,
        DashboardUpgradeModule,
        CockpitDashboardModule,
        SensorPhoneModule,
        UpgradeModule,
    ],
    declarations: [CumulocityVideoWidget, CumulocityVideoWidgetConfig],
    entryComponents: [CumulocityVideoWidget, CumulocityVideoWidgetConfig],
    providers: [
        {
            provide: HOOK_COMPONENTS,
            multi: true,
            useValue: [
                {
                    id: "com.softwareag.globalpresales.cumulocity.video.widget",
                    label: "Video",
                    description: "Plays streaming videos from sources such as HLS streams, on-demand videos (such as MP4, MKV, MOV) from URL and embedded YouTube, Vimeo, etc. videos. Please note that links must be HTTPS and Cross-Origin access enabled.",
                    component: CumulocityVideoWidget,
                    configComponent: CumulocityVideoWidgetConfig,
                    previewImage: require("@widget-assets/img-preview.png"),
                    data: {
                        ng1: {
                            options: {
                                noDeviceTarget: false,
                                deviceTargetNotRequired: true,
                            },
                        }
                    }
                },
            ],
        },

    ],
})
export class AppModule extends HybridAppModule {
    constructor(protected upgrade: NgUpgradeModule) {
        super();
    }
}
