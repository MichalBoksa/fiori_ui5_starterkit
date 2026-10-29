sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "CustomersList";

    Opa5.createPageObjects({
        onTheCustomersListPage: {
            actions: {
                iPressControl: function (sID) {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        id: sID,
                        viewName: sViewName,
                        actions: new Press(),
                        success: function () {
                            Opa5.assert.ok(`Successfully pressed ${sID}`);
                        },
                        errorMessage: "Could not find the Control"
                    });
                }
            },

            assertions: {
                iShouldSeeTheCustomersList: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "CustomersList",
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The " + sViewName + " view is displayed"
                            );
                        },
                        errorMessage:
                            "Did not find the " + sViewName + " view"
                    });
                },

                iShouldFindTheTable: function () {
                    return this.waitFor({
                        id: "CustomerListTable",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The table is displayed"
                            );
                        },
                        errorMessage: "Did not find the table"
                    });
                },
                iShouldFindTheSortButton: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "SortCountryButton",
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The " + sViewName + " button is displayed"
                            );
                        },
                        errorMessage:
                            "Did not find the " + sViewName + " button"
                    });
                },
                iShouldFindTheSortButton: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "SortCountryButton",
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The " + sViewName + " button is displayed"
                            );
                        },
                        errorMessage:
                            "Did not find the " + sViewName + " button"
                    });
                },
                iShouldFindTheExportButton: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "ExportExcelButton",
                        matchers: new sap.ui.test.matchers.I18NText({
                            propertyName: "text",
                            key: "lblExportCustomerData"
                        }),
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The " + sViewName + " button is displayed"
                            );
                        },
                        errorMessage:
                            "Did not find the " + sViewName + " button"
                    });
                },

            }
        }
    });
});