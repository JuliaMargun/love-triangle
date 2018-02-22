/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
  for(var i = 0; i < preferences.length; i++){
  	if (preferences[i] != 0){
  		if (preferences[i] != i + 1) {
	  		var lover1 = preferences[i];
	  		var lover2 = preferences[lover1 - 1];
	  		var lover3 = preferences[lover2 - 1];

	  		if (lover3 == i + 1){
	  			count++;
	  		}
	  	}
  		preferences[i] = 0;

  		/*if (preferences[preferences[preferences[i] - 1] - 1] == i - 1){
  			count++;
  			preferences[i] = 0;
  			preferences[preferences[i] - 1] = 0;
  			preferences[preferences[preferences[i] - 1] - 1] = 0;
  		}*/
  	}
  }
  return count;
};
