  cloneArray(value: any[]): any[] {
    let newArray: any[];
    if (value && value.length) {
      newArray = [];
      for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'object') {
          newArray[i] = Array.isArray(value[i]) ? this.cloneArray(value[i]) : this.cloneObject(value[i]);
        } else {
          newArray[i] = value[i];
        }
      }
    } else if (value === null) {
      newArray = null;
    }
    return newArray;
  }

  cloneObject(value: any): any {
    let newObject: any;
    if (value && typeof value === 'object' && Object.keys(value).length > 0) { // for object with keys
      newObject = {};
      for (let key in value) {
        if (typeof value[key] === 'object') { // if the value is an object or array then we have to clone that object again
          newObject[key] = Array.isArray(value) ? this.cloneArray(value[key]) : this.cloneObject(value[key]);
        } else {
          newObject[key] = value[key];
        }
      }
    } else if (value && typeof value === 'object' && Object.keys(value).length === 0) { // for empty object
      newObject = {};
    } else if (value === null) { // for null values
      newObject = null;
    }
    return newObject;
  }
