public class LinkedList {

    private int size;
    private Node start;
    public LinkedList() {
        size = 0;
        start = null;
    }
    public void insertAtFirst(int val) {
        Node n;
        n = new Node();
        n.setData(val);
        n.setNext(start);
        start = n;
        size++;
    }
    public void insertAtLast(int val) {
        Node n,t;
        n = new Node();
        n.setData(val);
        t = start;

        if(t == null) {
            start = n;
        }else {
            while(t.getNext() != null) {
                t = t.getNext();
                t.setNext(n);
            }
        }
        size++;
    }

    public void insertAtPos(int val, int pos) {
        if(pos == 1)
            insertAtFirst(val);
        else if(pos == size + 1)
            insertAtLast(val);
        else if(pos > 1 && pos <= size) {
            Node n,t;
            n = new Node(val, null);
            t = start;
            for(int i = 1; i < pos-1; i++)
                t = t.getNext();
            n.setNext(t.getNext());
            t.setNext(n);
            size++;

        }
        else
            System.out.println("Insertion not possible at position " + pos);

    }

    public void deleteAtPosition(int pos) {
        if(start == null)
            System.out.println("list is already empty");
        else if(pos < 1 || pos > size)
            System.out.println("Invalid position");
        else if(pos == 1)
            deleteFirst();
        else if(pos == size)
            deleteLast();
        else{
            Node t, t1;
            t = start;
            for(int i = 1; i < pos-1; i++)
                t = t.getNext();
            t1 = t.getNext();
            t.setNext(t1.getNext());
            size--;
        }
    }

    public void deleteLast() {
        if(start == null) {
            System.out.println("List is already empty");
        } else if(size == 1) {
            start = null;
            size--;
        }else {
            Node t;
            t = start;
            for(int i = 1; i < size-1; i++)
                t = t.getNext();
            t.setNext(null);
            size--;

        }
    }

    public void deleteFirst() {
        if(start == null) {
            System.out.println("List is already empty");
        } else {
            start = start.getNext();
            size--;
        }
    }

    public boolean isEmpty() {
        if(start == null) {
            return (true);
        }else {
            return (false);
        }
    }

    public int getListSize() {
        return (size);
    }
    public void viewList() {
        Node t;
        if(isEmpty())
            System.out.println("List is empty");

        else{
            t = start;
            for(int i = 1; i <= size; i++) {
                System.out.print(" " + t.getData());
                t = t.getNext();
            }
        }
    }



}
