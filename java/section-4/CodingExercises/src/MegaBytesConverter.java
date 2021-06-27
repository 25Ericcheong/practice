public class MegaBytesConverter {

    public static void printMegaBytesAndKiloBytes(int kiloBytes) {
        if (kiloBytes < 0) {
            System.out.println("Invalid Value");
        } else {
            // 1MB = 1024KB
            int megaByteNum = kiloBytes / 1024;
            int kiloByteNum = kiloBytes - (megaByteNum * 1024);

            System.out.println(kiloBytes + " KB = " + megaByteNum + " MB and" +
                    " " + kiloByteNum + " KB");
        }
    }
}
