sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet",

], function (Controller, Sorter, Filter, FilterOperator, library, Spreadsheet) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.Master", {
        onInit: function () {
        },

        onSortByCountry: function () {
            const oTable = this.byId("_IDGenTable");
            const oBinding = oTable.getBinding("items");
            const bDescending = this._bCountryDescending || false;
            oBinding.sort(new Sorter("Country", bDescending));
            this._bCountryDescending = !bDescending;

        },

        setCompanyFilter: function (oEvent) {

            const oTable = this.byId("_IDGenTable");
            const oBinding = oTable.getBinding("items");
            const sCompanyName = oEvent.getSource().getValue().trim();
            const aFilters = [];

            if (sCompanyName) {
                aFilters.push(
                    new Filter(
                        "CompanyName",
                        FilterOperator.Contains,
                        sCompanyName
                    )
                );
            }
            oBinding.filter(aFilters);
        },

        onPressGenerateExecelReport: function () {
            const oModel = this.getOwnerComponent().getModel();
            const oServiceUrl = this.getView().getModel().getServiceUrl();
            const oEntity = oModel.getServiceMetadata()
                .dataServices.schema[0].entityType
                .find((oEntity) => oEntity.name === "Customer").property;

            const aCols = oEntity.map((oProp) => ({
                label: oProp.name,
                type: oProp.type,
                property: oProp.name
            }));

            const oSettings = {
                workbook: { columns: aCols },
                dataSource: {
                    type: "OData",
                    dataUrl: `${oServiceUrl}/Customers`,
                    serviceUrl: oServiceUrl,
                    headers: {
                        Accept: "application/json",
                        "Accept-Language": "en",
                        "sap-cancel-on-close": "true",
                        DataServiceVersion: "2.0",
                        Connection: "keep-alive"
                    }
                },
                fileName: "Customers.xlsx",
                worker: true,
                sizeLimit: 500
            };
            const oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function () {
                oSheet.destroy();
            })
        }
    });
});