import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        LinkedList list = new LinkedList();
        boolean flag = true;

        while(flag) {
            System.out.println("");
            System.out.println("1. Add Item to the list at start");
            System.out.println("2. Add Item to the list at Last");
            System.out.println("3. Add Item to the list at position");
            System.out.println("4. Delete First Item from the List");
            System.out.println("5. Delete Last Item from the List");
            System.out.println("6. Delete Item from the list with given position");
            System.out.println("7. View List");
            System.out.println("8. Exit");
            System.out.println(" Enter your choice : ");
            int choice = sc.nextInt();
            int position, val;

            switch(choice) {
                case 1:
                    System.out.println("Enter value of list item ");
                    val = sc.nextInt();
                    list.insertAtFirst(val);
                    break;
                case 2:
                    System.out.println("Enter value of list item ");
                    val = sc.nextInt();
                    list.insertAtLast(val);
                    break;
                case 3:
                    System.out.println("Enter Position ");
                    position = sc.nextInt();
                    System.out.println("Enter value of next item ");
                    val = sc.nextInt();
                    list.insertAtPos(val, position);
                    break;
                case 4:
                    list.deleteFirst();
                    break;
                case 5:
                    list.deleteLast();
                    break;
                case 6:
                    System.out.println("Enter position ");
                    position = sc.nextInt();
                    list.deleteAtPosition(position);
                case 7:
                    list.viewList();
                    break;
                case 8:
                    flag = false;
                    break;
                default:
                    System.out.println("Invalid Choice");
            }
        }

    }
}
