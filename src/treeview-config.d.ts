export declare class TreeviewConfig {
    hasAdd: boolean;
    hasCheckbox: boolean;
    hasAllCheckBox: boolean;
    hasFilter: boolean;
    hasCollapseExpand: boolean;
    decoupleChildFromParent: boolean;
    maxHeight: number;
    readonly hasDivider: boolean;
    static create(fields?: {
        hasAdd?: boolean;
        hasCheckbox?: boolean;
        hasAllCheckBox?: boolean;
        hasFilter?: boolean;
        hasCollapseExpand?: boolean;
        decoupleChildFromParent?: boolean;
        maxHeight?: number;
    }): TreeviewConfig;
}
