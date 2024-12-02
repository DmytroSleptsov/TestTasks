internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine(GetMeetingsCount([2, 2, 3], 2)); //2
        Console.ReadKey();
    }

    private static int GetMeetingsCount(int[] populationArray, int targetColorIndex)
    {
        if (!IsValidInput(populationArray, targetColorIndex))
        {
            return -1;
        }

        int targetColorPopulation = populationArray[targetColorIndex];
        var otherColors = populationArray
            .Where((_, index) => index != targetColorIndex)
            .ToList();

        bool areOtherColorsEqual = otherColors[0] == otherColors[1];
        if (areOtherColorsEqual)
        {
            return otherColors[0];
        }

        int diff = Math.Abs(otherColors[0] - otherColors[1]);
        if (diff % 3 == 0 && targetColorPopulation >= diff / 3)
        {
            return otherColors.Max();
        }

        return -1;
    }

    private static bool IsValidInput(int[] populationArray, int colorIndex)
    {
        return populationArray.Length == 3 &&
               colorIndex >= 0 && colorIndex < 3 &&
               populationArray.ToList().TrueForAll(x => x >= 0) &&
               populationArray.Sum() != populationArray[colorIndex];
    }
}