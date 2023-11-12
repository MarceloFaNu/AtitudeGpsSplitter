using AtitudeGpsMauiApp.Domain.Enumeradores;

namespace AtitudeGpsSplitterApp.Core.Models
{
    public abstract class LogModelBase
    {
        public int Id { get; set; }
        public TipoDeLogEnum TipoDeLog { get; set; }
    }
}
