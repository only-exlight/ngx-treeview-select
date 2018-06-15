import { EventEmitter, TemplateRef } from '@angular/core';
import { TreeviewItem } from './treeview-item';
import { TreeviewConfig } from './treeview-config';
import { TreeviewItemTemplateContext } from './treeview-item-template-context';
export declare class TreeviewItemComponent {
    private defaultConfig;
    config: TreeviewConfig;
    template: TemplateRef<TreeviewItemTemplateContext>;
    item: TreeviewItem;
    checkedChange: EventEmitter<boolean>;
    addItem: EventEmitter<any>;
    selectItem: EventEmitter<any>;
    constructor(defaultConfig: TreeviewConfig);
    onCollapseExpand: () => void;
    onCheckedChange: () => void;
    onChildCheckedChange(child: TreeviewItem, checked: boolean): void;
    onAddItem(e: any): void;
    onSelectItem(item: TreeviewItem): void;
}
