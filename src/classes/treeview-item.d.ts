export interface TreeviewSelection {
    checkedItems: TreeviewItem[];
    uncheckedItems: TreeviewItem[];
}
export interface TreeItem {
    text: string;
    value: any;
    parent?: TreeviewItem;
    disabled?: boolean;
    checked?: boolean;
    collapsed?: boolean;
    children?: TreeItem[];
    isEdit?: boolean;
    isRoot?: boolean;
}
export declare class TreeviewItem {
    parent: TreeviewItem;
    private internalDisabled;
    private internalChecked;
    private internalCollapsed;
    private internalEdit;
    private isRoot;
    private internalChildren;
    text: string;
    value: any;
    constructor(item: TreeItem, autoCorrectChecked?: boolean);
    checked: boolean;
    readonly isRootItem: Boolean;
    readonly indeterminate: boolean;
    edit: boolean;
    setCheckedRecursive(value: boolean): void;
    disabled: boolean;
    collapsed: boolean;
    setCollapsedRecursive(value: boolean): void;
    children: TreeviewItem[];
    getSelection(): TreeviewSelection;
    correctChecked(): void;
    addChildItem(): void;
    private getCorrectChecked();
}