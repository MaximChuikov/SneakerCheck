using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using SneakerCheck.Data;

namespace SneakerCheck.Migrations;

public class Factory : IDesignTimeDbContextFactory<SneakerCheckDbContext>
{
    public SneakerCheckDbContext CreateDbContext(string[] args)
    {
        var configurationBuilder = new ConfigurationBuilder()
            .AddEnvironmentVariables()
            .AddUserSecrets<Factory>();

        var configuration = configurationBuilder.Build();
        var optionsBuilder = new DbContextOptionsBuilder<SneakerCheckDbContext>();
        SneakerCheckDbContext.Configure(optionsBuilder, configuration, typeof(Factory).Assembly);

        return new SneakerCheckDbContext(optionsBuilder.Options);
    }
}