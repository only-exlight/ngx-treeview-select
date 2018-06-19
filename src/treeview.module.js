import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dirictives/dropdown.directive';
import { DropdownMenuDirective } from './dirictives/dropdown-menu.directive';
import { DropdownToggleDirective } from './dirictives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from './components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, TreeviewI18nDefault } from './classes/treeview-i18n';
import { TreeviewConfig } from './classes/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './classes/treeview-event-parser';
var TreeviewModule = /** @class */ (function () {
    function TreeviewModule() {
    }
    TreeviewModule.forRoot = function () {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: TreeviewI18nDefault },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    };
    TreeviewModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        CommonModule
                    ],
                    declarations: [
                        TreeviewComponent,
                        TreeviewItemComponent,
                        TreeviewPipe,
                        DropdownDirective,
                        DropdownMenuDirective,
                        DropdownToggleDirective,
                        DropdownTreeviewComponent
                    ], exports: [
                        TreeviewComponent,
                        TreeviewPipe,
                        DropdownTreeviewComponent
                    ]
                },] },
    ];
    return TreeviewModule;
}());
export { TreeviewModule };
//# sourceMappingURL=treeview.module.js.map