using AtitudeGpsMauiApp.Domain.Enumeradores;

namespace AtitudeGpsSplitterApp.Core.Models
{
    public class Snapshot : LogModelBase
    {
        public int CopilotoId { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public double DistanciaEmMetros { get; set; }
        public double MetrosPorSegundo { get; set; }
        public double KilometrosPorHora { get; set; }
        public int Intervalo { get; set; }
        public long Momentum { get; set; }
        public int CorrelatoId { get; set; }

        public override string ToString()
        {
            return string.Format("{0,-5} {1,-3} {2,-5} {3,-25} {4,-5} {5,-25} {6,-6} {7,-8} {8,-5} {9,-8} | {10,-9}",
                "Ping: ", Intervalo + "s",
                "Lat: ", Latitude,
                "Lon: ", Longitude,
                "Dist: ", DistanciaEmMetros + "m",
                "Vel: ", MetrosPorSegundo + "m/s", KilometrosPorHora + "Km/h");
        }
    }
}
