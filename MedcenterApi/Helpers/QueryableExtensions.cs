using AutoMapper;
using AutoMapper.QueryableExtensions;
using System;
using System.Linq;

namespace MedcenterApi.Helpers
{
    public static class QueryableExtensions
    {
        public static PagedResult<V> GetPaged<E, V>(this IQueryable<E> query,
                                             int page, int pageSize, IMapper mapper) where V : class
        {
            var result = new PagedResult<V>
            {
                CurrentPage = page,
                NextPage = (query.Count() <= pageSize) || ((page * pageSize) == query.Count()) ? 0 : (page + 1),
                PreviousPage = page - 1
            };
            
            var skip = (page - 1) * pageSize;
            result.Results = query.Skip(skip)
                                  .Take(pageSize)
                                  .ProjectTo<V>(mapper.ConfigurationProvider)
                                  .ToList();

            return result;
        }
    }
}
