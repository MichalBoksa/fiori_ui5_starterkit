// /* global QUnit */

// sap.ui.define([
//     "sap/ui/test/opaQunit",
//     "./pages/EmployeesList"
// ], function (opaTest) {
//     "use strict";

//     QUnit.module("EmployeesList Journey");

//     opaTest(
//         "Should see the initial page of the app with elements",
//         function (Given, When, Then) {
//             // Arrangements
//             Given.iStartMyApp();

//             // Assertions
//             Then.onTheEmployeesListPage.iShouldSeeTheEmployeesList();
//             Then.onTheEmployeesListPage.iShouldFindTheTable();

//             // Cleanup
//             Then.iTeardownMyApp();
//         }
//     );
// });