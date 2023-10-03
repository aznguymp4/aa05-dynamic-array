class DynamicArray {

  constructor(defaultSize = 4) {
    this.capacity = defaultSize
    this.length = 0
    this.data = new Array(defaultSize)
  }

  read(index) {
    return this.data[index]
  }

  push(val) {
    if(this.length===this.capacity) this.resize()
    this.data[this.length] = val
    this.length++
  }

  pop() {
    if(!this.length) return undefined
    
    const value = this.data[this.length-1]
    this.data[--this.length] = undefined
    return value
  }
  
  shift() {
    if(!this.length) return undefined

    const value = this.data[0]
    for(let i=1;i<this.length;i++) this.data[i-1] = this.data[i]
    this.length--
    return value
  }

  unshift(val) {
    if(this.length===this.capacity) this.resize()
    for(let i=this.length;i>0;i--) this.data[i] = this.data[i-1]
    this.data[0] = val  
    this.length++
  }

  indexOf(val) {
    for(let i=0;i<this.length;i++) if(this.data[i]===val) return i
    return -1
  }

  resize() {
    this.data = [...this.data, ...new Array(this.capacity)]
    this.capacity *= 2
  }
}


module.exports = DynamicArray;
