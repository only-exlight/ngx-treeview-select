import { PipeTransform } from '@angular/core';
import { TreeviewItem } from '../classes/treeview-item';
export declare class TreeviewPipe implements PipeTransform {
    transform(objects: any[], textField: string): TreeviewItem[];
}
