import { TreeviewItem } from '../classes/treeview-item';
import { TreeviewConfig } from '../classes/treeview-config';
export interface TreeviewHeaderTemplateContext {
    config: TreeviewConfig;
    item: TreeviewItem;
    onCollapseExpand: () => void;
    onCheckedChange: (checked: boolean) => void;
    onFilterTextChange: (text: string) => void;
}
