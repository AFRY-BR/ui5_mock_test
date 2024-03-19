sap.ui.define([], function () {
    "use strict";
    return {
        numberSeparator: function (number) {
            return number ? number.toLocaleString() : 0;
        },
        localeDate: function (sDate) {
            var date = new Date(sDate);

            return date ? date.toLocaleDateString().substr(0, 10)  : "";
        },
        orderStatus: function (stat) {
            return stat == 1 ? 'Liberado' : 'Encerrado'
        }
    };
});