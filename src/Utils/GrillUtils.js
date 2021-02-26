export const isValidJSONString = (jsonString) => {
  try {
    JSON.parse(jsonString)
  } catch (_){
    return false
  }
  return true
}
class Grill {
  constructor(width, height){
    this.root = { x: 0, y: 0, width, height}
  }

  checkAndPlace(items){
    return items.sort((a, b) => ((b.height * b.width) - (a.height * a.width))).map(item => {
      const obj = this.locateSpace(this.root, item.width, item.height);
      if (obj) {
        item.fit = this.addCoordinates(obj, item.width, item.height);
      }
      return item;
    });
  }

  locateSpace(root, width, height) {
    if (root.used)
      return this.locateSpace(root.right, width, height) || this.locateSpace(root.down, width, height);
    else if ((width <= root.width) && (height <= root.height))
      return root;
    else
      return null;
  }

  addCoordinates(obj, width, height) {
    obj.used = true;
    obj.down = { x: obj.x, y: obj.y + height, width: obj.width, height: obj.height - height };
    obj.right = { x: obj.x + width, y: obj.y, width: obj.width - width, height: height };
    return obj;
  }
}

export default Grill

