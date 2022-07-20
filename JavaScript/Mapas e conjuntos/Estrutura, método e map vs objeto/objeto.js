const myMap = new Map();

myMap.set('apple', 'fruit');
// Map(1) {"apple" => "fruit"}

myMap.get("apple");
// 'fruit'

myMap.delete("apple");
// True

myMap.get(apple);
// undefined