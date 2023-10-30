using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace SneakerCheck.Core;

public static class Module
{
    public static IServiceCollection AddCore(this IServiceCollection services, IConfiguration configuration)
    {
        return services;
    }
}