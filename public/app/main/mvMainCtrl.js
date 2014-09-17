angular.module("app").controller("mvMainCtrl", function($scope){
	$scope.courses = [
		{name: "C# for SocioPaths", featured:true, published: new Date('1/2/12')},
		{name: "C# for Non-SocioPaths", featured:true, published: new Date('3/12/12')},
		{name: "Super Duper Expert C++", featured:false, published: new Date('4/14/12')},
		{name: "Visual Basic Bible", featured:false, published: new Date('5/3/13')},
		{name: "Javascript for Dummies", featured:true, published: new Date('3/22/13')},
		{name: "Angular How To's", featured:false, published: new Date('3/25/13')},
		{name: "Code Reviews for Jerks", featured:true, published: new Date('11/15/14')},
		{name: "Writing Code that Doesn't Suck", featured:true, published: new Date('12/21/14')}
	]
});