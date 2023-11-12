using AtitudeGpsSplitterApp.Core.Models;
using AtitudeGpsSplitterApp.Domain.DTO;

namespace AtitudeGpsSplitterApp.Viewmodels
{
    public class PainelViewmodel
    {
        public List<Resumo> Resumos { get; set; } = new();
        public List<Copiloto> Copilotos { get; set; } = new();
        public List<Snapshot> Snapshots { get; set; } = new();

        public List<ResumoDTO> ResumosDtos { get; set; } = new();
        public List<CopilotoDTO> CopilotosDtos { get; set; } = new();
        public List<SnapshotDTO> SnapshotsDtos { get; set; } = new();
        public List<IntervaloDTO> IntervalosDtos { get; set;} = new();
    }
}
