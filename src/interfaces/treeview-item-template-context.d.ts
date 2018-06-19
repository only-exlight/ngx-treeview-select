import { TreeviewItem } from '../classes/treeview-item';
export interface TreeviewItemTemplateContext {
    item: TreeviewItem;
    onCollapseExpand: () => void;
    onCheckedChange: () => void;
}
