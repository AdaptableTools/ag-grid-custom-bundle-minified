export * from '@ag-grid-community/core';
export * from '@ag-grid-community/client-side-row-model';
export * from '@ag-grid-enterprise/side-bar';
export * from '@ag-grid-enterprise/column-tool-panel';
export * from '@ag-grid-enterprise/filter-tool-panel';
export * from '@ag-grid-enterprise/menu';
export * from '@ag-grid-enterprise/range-selection';
export * from '@ag-grid-enterprise/charts-enterprise';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { GridChartsModule } from '@ag-grid-enterprise/charts-enterprise';

import { ModuleRegistry } from '@ag-grid-community/core';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  MenuModule,
  RangeSelectionModule,
  GridChartsModule,
]);
