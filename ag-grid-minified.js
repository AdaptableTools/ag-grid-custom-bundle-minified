const columnDefs = [
  { field: 'OrderId' },
  {
    field: 'CompanyName',
  },
  {
    field: 'ContactName',
  },
  {
    field: 'Employee',
  },
  {
    field: 'InvoicedCost',
  },
];

const gridOptions = {
  columnDefs,
  rowData: null,
  enableCharts: true,
  enableRangeSelection: true,
  sideBar:true
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  const gridDiv = document.querySelector('#grid');
  const api = agGrid.createGrid(gridDiv, gridOptions);
  setTimeout(() => {
    api.setGridOption('rowData', window.orders);
  }, 1000);
});
