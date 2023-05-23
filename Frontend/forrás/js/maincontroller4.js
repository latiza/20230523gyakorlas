let app = angular.module('AngularStart',[]);
app.controller("MainController", function($scope){

  $scope.mentettAdat = window.localStorage.getItem('bocik');

  if ($scope.mentettAdat!=null && $scope.mentettAdat!='') {
    $scope.bocik = angular.fromJson(window.localStorage.getItem('bocik'));
  }
  else {
    $scope.bocik = [
      { id: 0, fulszam: 'HU04522', szuldatum: "2023.03.04.", neme:1 },
      { id: 1, fulszam: 'HU04523', szuldatum: "2023.03.05.", neme:1 },
      { id: 2, fulszam: 'HU04524', szuldatum: "2023.03.06.", neme:0 },
      { id: 3, fulszam: 'HU04525', szuldatum: "2023.03.07.", neme:0 },
      { id: 4, fulszam: 'HU04528', szuldatum: "2023.03.08.", neme:1 },
      { id: 5, fulszam: 'HU04530', szuldatum: "2023.03.09.", neme:0 },
      { id: 6, fulszam: 'HU04532', szuldatum: "2023.03.10.", neme:1 },
      { id: 7, fulszam: 'HU04533', szuldatum: "2023.03.11.", neme:1 },
      { id: 8, fulszam: 'HU04535', szuldatum: "2023.03.12.", neme:0 },
      { id: 9, fulszam: 'HU04536', szuldatum: "2023.03.14.", neme:0 }
    ];
  }
//felvitel
  
      //mentés a localsotrage-be
    
  });


