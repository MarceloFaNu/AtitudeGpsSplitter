namespace AtitudeGpsSplitterApp.Domain.Extensions
{
    public static class CollectionsExtensions
    {
        public static bool IsNullOrEmptyCollection<T>(this IEnumerable<T> collection)
        {
            return collection == null || !(collection.Any());
        }

        public static IEnumerable<T> RemoveNulls<T>(this IEnumerable<T> collection)
        {
            return collection.Where(x => x != null);
        }
    }
}
