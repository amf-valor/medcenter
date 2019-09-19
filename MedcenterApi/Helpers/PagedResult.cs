using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MedcenterApi.Helpers
{
    public class PagedResult<T>
    {
        public int CurrentPage { get; set; }
        public int NextPage { get; set; }
        public int PreviousPage { get; set; }
        public IList<T> Results { get; set; }

        public PagedResult()
        {
            Results = new List<T>();
        }
    }
}
