class Sorter {
  constructor() {
		this.sorterArr = [];
		this.compareFn = null;
  }

  add(element) {
		this.sorterArr.push(element);
  }

  at(index) {
    return this.sorterArr[index];
  }

  get length() {
		return this.sorterArr.length;
  }

  toArray() {
		return this.sorterArr;
  }

  sort(indices) {
		
		indices.sort((a, b) => {
			return a - b;
		});
		
    let sortinPart = this.sorterArr.slice(indices[0], indices[indices.length - 1] + 1);
		
		if (this.compareFn === null) {
			sortinPart.sort((a, b) => {
				return a - b;
			});
		} else {
			sortinPart.sort(this.compareFn);
		}
		
		
		indices.forEach((item, i) => {
			this.sorterArr[item] = sortinPart[i];
		});
		
		return this.sorterArr;
		
  }

  setComparator(compareFunction) {
    this.compareFn = compareFunction;
  }
}

module.exports = Sorter;