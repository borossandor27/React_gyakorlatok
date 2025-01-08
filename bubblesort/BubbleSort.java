import java.util.Scanner;

public class BubbleSort {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Bekéri az N értékét
        System.out.print("Add meg a tömb méretét (N): ");
        int N = Integer.parseInt(scanner.nextLine());

        // Létrehozza a tömböt és bekéri az elemeket
        int[] tomb = new int[N];
        System.out.println("Add meg a tömb elemeit:");
        for (int i = 0; i < N; i++) {
            tomb[i] = Integer.parseInt(scanner.nextLine());
        }

        // Buborékos rendezés
        for (int i = 0; i < N - 1; i++) {
            for (int j = 0; j < N - i - 1; j++) {
                if (tomb[j] > tomb[j + 1]) {
                    int temp = tomb[j];
                    tomb[j] = tomb[j + 1];
                    tomb[j + 1] = temp;
                }
            }
        }

        // A rendezett tömb kiírása
        System.out.println("A rendezett tömb elemei:");
        for (int i = 0; i < N; i++) {
            System.out.println(tomb[i]);
        }

        scanner.close();
    }
}
