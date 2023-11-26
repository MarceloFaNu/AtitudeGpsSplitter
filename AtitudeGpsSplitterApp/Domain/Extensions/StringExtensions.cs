namespace AtitudeGpsSplitterApp.Domain.Extensions
{
    public static class StringExtensions
    {
        public static bool HasJsonFormatString(this string value)
        {
            if (value == null) return false;
            value = value.Trim();
            return value.StartsWith("{") && value.EndsWith("}");
        }
    }
}
