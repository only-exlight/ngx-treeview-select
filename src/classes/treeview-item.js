import { isBoolean, isNil, isString } from 'lodash';
import { TreeviewHelper } from './treeview-helper';
var TreeviewItem = /** @class */ (function () {
    function TreeviewItem(item, autoCorrectChecked) {
        if (autoCorrectChecked === void 0) { autoCorrectChecked = false; }
        var _this = this;
        this.parent = null;
        this.internalDisabled = false;
        this.internalChecked = true;
        this.internalCollapsed = false;
        this.internalEdit = false;
        this.internalCreated = true;
        this.isRoot = false;
        this.internalSelected = false;
        this.internalActive = false;
        if (isNil(item)) {
            throw new Error('Item must be defined');
        }
        if (isString(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }
        this.value = item.value;
        if (isBoolean(item.checked)) {
            this.checked = item.checked;
        }
        if (isBoolean(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if (isBoolean(item.isEdit)) {
            this.internalEdit = item.isEdit;
        }
        if (isBoolean(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (!isNil(item.children) && item.children.length > 0) {
            this.children = item.children.map(function (child) {
                if (_this.disabled === true) {
                    child.disabled = true;
                }
                child.parent = _this;
                return new TreeviewItem(child);
            });
        }
        if (isBoolean(item.isRoot)) {
            this.isRoot = item.isRoot;
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
        if (item.parent) {
            this.parent = item.parent;
        }
    }
    Object.defineProperty(TreeviewItem.prototype, "checked", {
        get: function () {
            return this.internalChecked;
        },
        set: function (value) {
            if (!this.internalDisabled) {
                if (this.internalChecked !== value) {
                    this.internalChecked = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "isRootItem", {
        get: function () {
            return this.isRoot;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "indeterminate", {
        get: function () {
            return this.checked === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "edit", {
        get: function () {
            return this.internalEdit;
        },
        set: function (value) {
            this.internalEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "created", {
        get: function () {
            return this.internalCreated;
        },
        set: function (value) {
            if (!value) {
                this.internalCreated = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeviewItem.prototype.setCheckedRecursive = function (value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(function (child) { return child.setCheckedRecursive(value); });
            }
        }
    };
    Object.defineProperty(TreeviewItem.prototype, "disabled", {
        get: function () {
            return this.internalDisabled;
        },
        set: function (value) {
            if (this.internalDisabled !== value) {
                this.internalDisabled = value;
                if (!isNil(this.internalChildren)) {
                    this.internalChildren.forEach(function (child) { return child.disabled = value; });
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "collapsed", {
        get: function () {
            return this.internalCollapsed;
        },
        set: function (value) {
            if (this.internalCollapsed !== value) {
                this.internalCollapsed = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TreeviewItem.prototype.setCollapsedRecursive = function (value) {
        this.internalCollapsed = value;
        if (!isNil(this.internalChildren)) {
            this.internalChildren.forEach(function (child) { return child.setCollapsedRecursive(value); });
        }
    };
    Object.defineProperty(TreeviewItem.prototype, "children", {
        get: function () {
            return this.internalChildren;
        },
        set: function (value) {
            if (this.internalChildren !== value) {
                if (!isNil(value) && value.length === 0) {
                    throw new Error('Children must be not an empty array');
                }
                this.internalChildren = value;
                if (!isNil(this.internalChildren)) {
                    var checked_1 = null;
                    this.internalChildren.forEach(function (child) {
                        if (checked_1 === null) {
                            checked_1 = child.checked;
                        }
                        else {
                            if (child.checked !== checked_1) {
                                checked_1 = undefined;
                                return;
                            }
                        }
                    });
                    this.internalChecked = checked_1;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "selected", {
        get: function () {
            return this.internalSelected;
        },
        set: function (value) {
            this.dropSelection();
            this.internalSelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeviewItem.prototype, "active", {
        get: function () {
            return this.internalActive;
        },
        set: function (val) {
            this.internalActive = val;
        },
        enumerable: true,
        configurable: true
    });
    TreeviewItem.prototype.getSelection = function () {
        var checkedItems = [];
        var uncheckedItems = [];
        if (isNil(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }
        else {
            var selection = TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        return {
            checkedItems: checkedItems,
            uncheckedItems: uncheckedItems
        };
    };
    TreeviewItem.prototype.correctChecked = function () {
        this.internalChecked = this.getCorrectChecked();
    };
    TreeviewItem.prototype.addChildItem = function () {
        var newItem = new TreeviewItem({
            parent: this,
            checked: false,
            children: [],
            collapsed: false,
            disabled: false,
            text: '',
            value: '',
            isEdit: true
        }, false);
        if (this.internalChildren) {
            this.internalChildren.push(newItem);
        }
        else {
            this.internalChildren = [];
            this.internalChildren.push(newItem);
        }
    };
    TreeviewItem.prototype.getBrother = function (step) {
        if (this.parent) {
            return this._getNeighbour(step, this.parent.children);
        }
    };
    TreeviewItem.prototype.getParent = function (step) {
        if (step === 1) {
            return this.children && this.children[0];
        }
        else {
            return this.parent.value ? this.parent : null;
        }
    };
    TreeviewItem.prototype._getNeighbour = function (step, items) {
        var _this = this;
        if (items) {
            var myIdx_1 = items.findIndex(function (item) { return item === _this; });
            return items.find(function (_item, idx) { return idx - step === myIdx_1; });
        }
        else {
            return null;
        }
    };
    TreeviewItem.prototype.getCorrectChecked = function () {
        var checked = null;
        if (!isNil(this.internalChildren)) {
            for (var _i = 0, _a = this.internalChildren; _i < _a.length; _i++) {
                var child = _a[_i];
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    };
    TreeviewItem.prototype.dropSelection = function () {
        var rootNode = this;
        var subDrop = function (item) {
            item.internalSelected = false;
            if (item.internalChildren) {
                item.internalChildren.forEach(function (chld) { return subDrop(chld); });
            }
        };
        while (rootNode.parent) {
            rootNode = rootNode.parent;
        }
        subDrop(rootNode);
    };
    return TreeviewItem;
}());
export { TreeviewItem };
//# sourceMappingURL=treeview-item.js.map