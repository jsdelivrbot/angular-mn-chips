"use strict";function mnOptionDirective($parse,$timeout){function controller($scope,$element,$attrs){var name=$element.attr("name")||$attrs.ngModel.split(".")[$attrs.ngModel.split(".").length-1];$element.attr("name",name),$element.find("input").attr("name",name),$element[0].removeAttribute("checked"),$element[0].querySelector("input").removeAttribute("checked")}function link(scope,element,attributes){var modelValue=$parse(attributes.ngModel)(scope);angular.equals(element[0].value,modelValue)||$timeout(function(){element[0].value=modelValue,$parse(attributes.ngModel).assign(scope,element[0].value)},0),element.find("input").on("change",function(event){$parse(attributes.ngModel).assign(scope,element[0].value),element[0].value=element[0].value,event.target.blur(),scope.$apply()});var dirtyLabel=element[0].querySelector("label + label");dirtyLabel&&element[0].removeChild(dirtyLabel)}return{restrict:"E",controller:controller,link:link,require:"ngModel"}}angular.module("mn-option",[]),mnOptionDirective.$inject=["$parse","$timeout"],angular.module("mn-option").directive("mnOption",mnOptionDirective);
//# sourceMappingURL=angular-mn-option.js.map