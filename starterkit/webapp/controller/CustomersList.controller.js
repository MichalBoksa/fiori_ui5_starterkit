sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/thirdparty/jquery"
],
    function (Controller, jQuery) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomersList", {
            onInit: function () {

            },

            onCustomerPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerDetails", {
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
                });
            },
            onCreateCustomerPress: function () {
                this.getOwnerComponent()
                    .getRouter()
                    .navTo("CreateCustomer");
            },
            onPerformancePress: function () {
                this.getOwnerComponent().getRouter().navTo("EmployeesList");
            },

            // onAfterRendering: function () {
            //     const oViewHtml = this.getView().getDomRef();
            //     jQuery(oViewHtml).find("button").remove();
            // },
        })
    }
)