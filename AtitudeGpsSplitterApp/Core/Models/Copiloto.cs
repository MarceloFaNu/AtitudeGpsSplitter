﻿using AtitudeGpsMauiApp.Domain.Enumeradores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtitudeGpsSplitterApp.Core.Models
{
    public class Copiloto : LogModelBase
    {
        public int ResumoId { get; set; }
        public AtitudeEnum Atitude { get; set; }
    }
}
