import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {
    transform(arr: any, searchText: string): any[] {
        if (!arr) {
            return [];
        }
        if (!searchText) {
            return arr;
        }
        return arr.filter(item => {
            return this.arrContainsFilterText(item, searchText);
        });
    }

    private arrContainsFilterText(item: any, searchText: string): boolean {
        searchText = searchText.toLocaleLowerCase();
        const filterTerms = searchText.split(' ');
        for (const filterTerm of filterTerms) {
          const hasFilterTerm = item.name.toLocaleLowerCase().includes(filterTerm);
          if (hasFilterTerm === false) {
            return false;
          }
        }
        return true;
    }
}