using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SneakerCheck.Data;

public static class Module
{
    public static IServiceCollection AddData(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<SneakerCheckDbContext>(options =>
            SneakerCheckDbContext.Configure(options, configuration));
        return services;
    }
}