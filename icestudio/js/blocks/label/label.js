
angular.module('app')

.service('LabelService', function LabelService () {

    var exports = {};

    exports.addNewLabelInputNode = function (nodeID, callback) {
		swal({
			title: "Label input",
			text: "Enter the label name:",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: true,
			animation: "none",
			inputPlaceholder: "signal"
		},
		function(value) {
			if ((value === false) || (value === "")) {
                return false;
            }
            array = value.split(' ');
            for (var i = 0; i < array.length; i++) {
                var item = '_' + array[i];
    			var block = {
    				label: "",
    				type: "linput",
    				params: [ item ],
    				id: nodeID++,
    				x: 100, y: 200 + i * 120,
    				width: 80 + item.length * 16,
    				outputConnectors: [ {
                        value: item,
                        label: item
                    }]
    			};
                callback(block, nodeID);
            };
		});
	};

    exports.addNewLabelOutputNode = function (nodeID, callback) {
		swal({
			title: "Label output",
			text: "Enter the label name:",
			type: "input",
			showCancelButton: true,
			closeOnConfirm: true,
			animation: "none",
			inputPlaceholder: "signal"
		},
		function(value) {
			if ((value === false) || (value === "")) {
                return false;
            }
            array = value.split(' ');
            for (var i = 0; i < array.length; i++) {
                var item = '_' + array[i];
    			var block = {
    				label: "",
    				type: "loutput",
    				params: [ item ],
    				id: nodeID++,
    				x: 100, y: 200 + i * 120,
    				width: 80 + item.length * 16,
    				inputConnectors: [ {
                        value: item,
                        label: item
                    }]
    			};
                callback(block, nodeID);
            };
		});
	};

    return exports;
});
