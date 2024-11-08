//Driver Code Starts
//Initial Template for Java
import java.io.*;
import java.util.*;
class GFG {
    public static void main(String[] args) throws IOException 
    {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine().trim());
        while (t-- > 0) {
            int a = Integer.parseInt(br.readLine().trim());
            int b = Integer.parseInt(br.readLine().trim());
            Solution sln = new Solution();
            System.out.println(sln.addNumbers(a,b));
        }
    }
}
// Driver Code Ends
class Solution {
    int addNumbers(int a, int b) {
        // Your Code Here
        return 0;// Remove this line 
    }
}
