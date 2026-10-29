sap.ui.define([
    "stk/starterkit/model/Formatter"
], function (Formatter) {
    "use strict";

   QUnit.module("Name formatting cases");
    function formatNameTest(oOptions) {
        //Act
        const sName = Formatter.formatName(oOptions.sFirstName, oOptions.sLastName)
        //
        oOptions.assert.strictEqual(sName, oOptions.expected, `the name was correctly formated $(sName)`);
    }

    QUnit.test("Andrzej Naczepa → A. Naczepa", function (assert) {
        formatNameTest({
            assert: assert,
            sFirstName: "Andrzej",
            sLastName: "Naczepa",
            expected: "A. Naczepa"
        });
    });

    QUnit.test("Francesco Colapinto → F. Colapinto", function (assert) {
        formatNameTest({
            assert: assert,
            sFirstName: "Francesco",
            sLastName: "Colapinto",
            expected: "F. Colapinto"
        });
    });

    QUnit.test("Satoshi Nakamoto → S. Nakamoto", function (assert) {
        formatNameTest({
            assert: assert,
            sFirstName: "Satoshi",
            sLastName: "Nakamoto",
            expected: "S. Nakamoto"
        });
    });

    // QUnit.test("Antonio Lucio Vivaldi → A. L. Vivaldi", function (assert) {
    //     formatNameTest({
    //         assert: assert,
    //         sFirstName: "Antonio Lucio",
    //         sLastName: "Vivaldi",
    //         expected: "A. L. Vivaldi"
    //     });
    // });

    QUnit.test("Ruben Loftus-Cheek → R. Loftus-Cheek", function (assert) {
        formatNameTest({
            assert: assert,
            sFirstName: "Ruben",
            sLastName: "Loftus-Cheek",
            expected: "R. Loftus-Cheek"
        });
    });
});

