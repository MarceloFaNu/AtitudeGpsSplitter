namespace AtitudeGpsSplitterApp.Domain.Extensions
{
    public static class StringExtensions
    {
        public static bool HasJsonFormatString(this string value)
        {
            return value.StartsWith("{") && value.EndsWith("}");
        }
    }
}
