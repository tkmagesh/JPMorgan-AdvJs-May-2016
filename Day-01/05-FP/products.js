var products = [
	{id : 4, name : 'Pen', cost : 60, units : 60, category : 1},
	{id : 8, name : 'Hen', cost : 90, units : 70, category : 2},
	{id : 3, name : 'Ten', cost : 20, units : 80, category : 1},
	{id : 2, name : 'Den', cost : 40, units : 40, category : 2},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 1}
]

/*
sort
filter
any
all
min
max
sum
aggregate
groupBy
*/

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});

describe("Sorting", function(){
	describe("Default Sort [by id]", function(){
		function sort(){
			for(var i=0; i < products.length-1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});
	describe("Any list by any attribute", function(){
		function sort(list, attrName){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("products by cost", function(){
			sort(products, "cost");
			console.table(products);
		});

		describe("products by units", function(){
			sort(products, "units");
			console.table(products);
		});
	})
	

	describe("By any comparison", function(){
		function sort(list, comparerFn){
			for(var i=0; i < list.length-1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}
		describe("products by value [units * cost]", function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;

				if (p1Value > p2Value) return 1;
				if (p1Value === p2Value) return 0;
				return -1;
			}
			sort(products, productComparerByValue);
			console.table(products);
		})
		
	});

});

describe("Filtering", function(){
	describe("All category 1 products", function(){
		function filterCategory1Products(){
			var result = [];
			for(var i=0; i<products.length; i++)
				if (products[i].category === 1)
					result.push(products[i]);
			return result;
		}
		var category1Products = filterCategory1Products();
		console.table(category1Products);
	});
	describe("Any list by any criteria", function(){
		function filter(list, criteriaFn){
			var result = [];
			for(var i=0; i<list.length; i++)
				if (criteriaFn(list[i]))
					result.push(list[i]);
			return result;
		}

		function negate(fn){
			return function(){
				return !fn.apply(this, arguments);
			};
		}

		var costlyProductCriteria = function(product){
			return product.cost > 30;
		};
		describe("costly products [ cost > 30 ]", function(){
			var costlyProducts = filter(products, costlyProductCriteria);
			console.table(costlyProducts);
		});

		/*var affordableProductCriteria = function(product){
			//return product.cost <= 30;
			return !costlyProductCriteria(product);
		};*/

		var affordableProductCriteria = negate(costlyProductCriteria);

		describe("Affordable products [ cost <= 30 ]", function(){
			var affordableProducts = filter(products, affordableProductCriteria);
			console.table(affordableProducts);
		});


		var category1ProductCriteria = function(product){
			return product.category === 1;
		};
		describe("category 1 products", function(){
			var category1Products = filter(products, category1ProductCriteria);
			console.table(category1Products);
		});

		/*var nonCategory1ProductCriteria = function(product){
			return !category1ProductCriteria(product);
		};*/

		var nonCategory1ProductCriteria = negate(category1ProductCriteria);

		describe("non category 1 products", function(){
			var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
			console.table(nonCategory1Products);
		})
	});
});