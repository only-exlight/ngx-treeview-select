export declare class TreeviewConfig {
    hasAdd: boolean;
    hasCheckbox: boolean;
    hasAllCheckBox: boolean;
    hasFilter: boolean;
    hasCollapseExpand: boolean;
    decoupleChildFromParent: boolean;
    maxHeight: number;
    maxWidth: number;
    readonly hasDivider: boolean;
    static create(fields?: {
        hasAdd?: boolean;
        hasCheckbox?: boolean;
        hasAllCheckBox?: boolean;
        hasFilter?: boolean;
        hasCollapseExpand?: boolean;
        decoupleChildFromParent?: boolean;
        maxHeight?: number;
        maxWidth?: number;
    }): TreeviewConfig;
}
