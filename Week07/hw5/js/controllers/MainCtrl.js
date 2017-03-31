myApp.controller("ListController", ['$scope', function($scope) {
    $scope.table = [];
    $scope.memberDetails = [];
    $scope.moduleDetails = [];
        $scope.addNewMember = function(memberDetails){
            // angular.forEach($scope.moduleDetails, function(){
            //     if(memberDetails.mname === moduleDetails.mname){
            //         console.log(true)
            //     }
            // });
            //i lost hope and just went with for the live of me i can not push it member in 
            $scope.memberDetails.push({ 
                'fname': memberDetails.fname, 
                'lname': memberDetails.lname,
                'email': memberDetails.email,
                'mname': memberDetails.mname,
            });
            angular.forEach($scope.memberDetails, function() {
                if(memberDetails.mname == $scope.moduleDetails.mname){
                    $scope.moduleDetails.member.push(toArray($scope.memberDetails))
                }
            });
            $scope.PD = {};

        };

        $scope.addNewModule = function(moduleDetails){
            var count = 0;
            angular.forEach($scope.moduleDetails, function(){
                count++
            }); 
            $scope.moduleDetails.push({ 
                'mname': moduleDetails.mname + "- Group " + count , 
                'link': moduleDetails.link,
                
            }); 
            $scope.MD = {};
        };   

        $scope.removeModule = function(selected){
            var index = $scope.moduleDetails.indexOf(selected) ;
            $scope.moduleDetails.splice(index, 1)
        };

        $scope.removeMember = function(){
            var newDataList=[];
            angular.forEach($scope.memberDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);

                }
                
                // $scope.member = newDataList;
            }); 
            $scope.memberDetails = newDataList;
        };

        $scope.checkAll = function () {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.memberDetails, function (memberDetails) {
                memberDetails.selected = $scope.selectedAll;
            });
        }; 

    }]);



