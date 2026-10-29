sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";

    const sViewName = "EmployeesList";

    Opa5.createPageObjects({
        onTheEmployeesListPage: {
            actions: {
                
            },

            assertions: {
                iShouldSeeTheEmployeesList: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "EmployeesList",
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
                iShouldSeeTheColumn: function (sID) {
                    return this.waitFor({
                        viewName: sViewName,
                        id: sID,
                        success: function () {
                            Opa5.assert.ok(
                                true,
                                "The " + sViewName + " column is displayed"
                            );
                        },
                        errorMessage:
                            "Did not find the " + sViewName + " column"
                    });
                },

                iShouldFindTheTable: function () {
                    return this.waitFor({
                        id: "employeesTable",
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
                iShouldFindTheMotivateButton: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "_IDGenButton2",
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
                iShouldFindTheFireButton: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "_IDGenButton3",
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