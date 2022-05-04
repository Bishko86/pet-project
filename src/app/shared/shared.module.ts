import { NgModule } from "@angular/core";
import { ShadowBlockDirective } from "../directive/shadow-block.directive";
import { OfficeStyleDirective } from "../directive/office-style.directive";
import { FilterPipe } from "../pipes/filter.pipe";
import { TitleStyleDirective } from "../directive/title-style.directive";


@NgModule({
    declarations:[
        OfficeStyleDirective,
        ShadowBlockDirective,
        TitleStyleDirective,
        FilterPipe
    ],
    exports:[
        OfficeStyleDirective,
        ShadowBlockDirective,
        TitleStyleDirective,
        FilterPipe
    ]
})

export class SharedModule {}