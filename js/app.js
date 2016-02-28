(function() {
	var app = angular.module('leagueProject', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis risus maximus, tincidunt libero nec, pellentesque eros. Mauris sed ultricies leo, eu scelerisque justo. Sed elementum mi nec felis posuere fringilla. Pellentesque eget condimentum mauris, sit amet placerat nulla. Nullam venenatis, felis porta accumsan laoreet, nisl risus venenatis ligula, in pretium neque lorem at enim. Nam porta nunc a tincidunt facilisis. Duis et purus vitae lorem porttitor suscipit.',
			canPurchase: true,
			soldOut: false,
			reviews: [
				{
					stars: 5,
					body: "I love this product!",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "This product sucks",
					author: "tim@hater.com"
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis risus maximus, tincidunt libero nec, pellentesque eros. Mauris sed ultricies leo, eu scelerisque justo. Sed elementum',
			canPurchase: true,
			soldOut:false,
		}
	];

	app.directive('myCustomer', function() {
	  return {
	    restrict: 'E',
	    templateUrl: '../angular/product-title.html'
	  };
	});
})();