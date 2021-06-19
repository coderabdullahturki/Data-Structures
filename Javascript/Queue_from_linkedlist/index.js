console.clear();
// Implementing Queue from Linked List

class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}

class Queue
{
  constructor () 
  {
    this.head = null
    this.tail = null
  }

  unshift(value)
  {
	    var node = new newNode(value)
	    if(this.head==null)							
	      this.head=node
	    else
		    this.tail.next=node
	    this.tail=node
  }

  shift()
  {
	    if(this.head==null)
		    console.log("Queue Empty")
	    else
	    {
	      var temp=this.head
		    console.log((temp.data))
		    this.head=this.head.next
		    temp=null
	    }
		  if(this.head==null)
			  console.log("Now Queue Empty")

  }

  display()
  {
    
      var temp=this.head
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }

      
  }

  toString() {
            return JSON.stringify(this);
       }
  
}
  

const front = new Queue()
front.unshift(10)
front.unshift(20)
front.unshift(30)
front.unshift(40)
front.unshift(50)


console.log("After INSERT...")
front.display()

console.log("removing the first element : ");
front.shift()

console.log("After DELETE...")
front.display()
console.log(front.toString())