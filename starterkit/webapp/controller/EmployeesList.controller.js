sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/thirdparty/jquery",
    "sap/m/library",
    "sap/m/MessageBox"
], function (Controller, JSONModel, jQuery, mobileLibrary, MessageBox) {
    "use strict";

    const URLHelper = mobileLibrary.URLHelper;

    return Controller.extend("stk.starterkit.controller.EmployeesList", {
        onInit: function () {
            this.getView().setModel(
                new JSONModel({ rows: [] }),
                "employees"
            );

            this.getOwnerComponent()
                .getRouter()
                .getRoute("EmployeesList")
                .attachPatternMatched(this._loadEmployees, this);
        },

        _loadEmployees: function () {
            const oView = this.getView();
            const oODataModel = this.getOwnerComponent().getModel();

            oView.setBusy(true);

            oODataModel.read("/Employees", {
                urlParameters: {
                    "$expand": "Orders"
                },

                success: function (oData) {
                    const aEmployees = oData.results.map(function (oEmployee) {
                        return {
                            EmployeeID: oEmployee.EmployeeID,
                            FirstName: oEmployee.FirstName,
                            LastName: oEmployee.LastName,
                            Title: oEmployee.Title,
                            OrderCount: oEmployee.Orders.results.length
                        };
                    });

                    oView.getModel("employees").setData({
                        rows: aEmployees
                    });

                    oView.setBusy(false);
                },

                error: function () {
                    oView.setBusy(false);
                    MessageBox.error("Nie udało się pobrać pracowników.");
                }
            });
        },

        onNavBack: function () {
            this.getOwnerComponent()
                .getRouter()
                .navTo("CustomersList");
        },

        onMotivate: function (oEvent) {
            const oEmployee = oEvent.getSource()
                .getBindingContext("employees")
                .getObject();

            this._openEmail(
                oEmployee,
                "Good job!",
                "You are doing well, thank you!"
            );
        },

        onFire: function (oEvent) {
            const oEmployee = oEvent.getSource()
                .getBindingContext("employees")
                .getObject();

            jQuery.ajax({
                url: "/evilinsult/generate_insult.php",
                method: "GET",
                dataType: "json",

                data: {
                    lang: "en",
                    type: "json"
                },

                success: (oResponse) => {
                    this._openEmail(
                        oEmployee,
                        "Performance feedback",
                        oResponse.insult
                    );
                },

                error: function () {
                    MessageBox.error("Nie udało się pobrać tekstu z API.");
                }
            });
        },

        _openEmail: function (oEmployee, sSubject, sBody) {
            const sEmail = (
                oEmployee.FirstName + "." +
                oEmployee.LastName + "@example.com"
            ).toLowerCase();

            URLHelper.triggerEmail(sEmail, sSubject, sBody);
        }
    });
});