/* global QUnit */

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList",
    "./pages/EmployeesList"
], function (opaTest) {
    "use strict";

    QUnit.module("CustomersList Journey");

    opaTest(
        "Should see the initial page of the app with elements",
        function (Given, When, Then) {
            // Arrangements
            Given.iStartMyApp();

            // Assertions
            Then.onTheCustomersListPage.iShouldSeeTheCustomersList();
            Then.onTheCustomersListPage.iShouldFindTheTable();
            When.onTheCustomersListPage.iPressControl("PerformanceButton")
            Then.onTheEmployeesListPage.iShouldSeeTheEmployeesList();
            Then.onTheEmployeesListPage.iShouldFindTheTable();
            Then.onTheEmployeesListPage.iShouldSeeTheColumn("_IDGenColumn6");
            Then.onTheEmployeesListPage.iShouldSeeTheColumn("_IDGenColumn7");
            Then.onTheEmployeesListPage.iShouldSeeTheColumn("_IDGenColumn8");


            // Cleanup
            Then.iTeardownMyApp();
        }
    );
});