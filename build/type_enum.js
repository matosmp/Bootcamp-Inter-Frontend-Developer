"use strict";
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(`Cores ${DesignColors.white}`);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPPORT"] = 2] = "SUPPORT";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.SUPPORT);
var StatusPermission2;
(function (StatusPermission2) {
    StatusPermission2[StatusPermission2["ADMIN"] = 3] = "ADMIN";
    StatusPermission2[StatusPermission2["USER"] = 1] = "USER";
    StatusPermission2[StatusPermission2["SUPPORT"] = 5] = "SUPPORT";
})(StatusPermission2 || (StatusPermission2 = {}));
console.log("Enum com atribuição de valor = ", StatusPermission2.SUPPORT);
