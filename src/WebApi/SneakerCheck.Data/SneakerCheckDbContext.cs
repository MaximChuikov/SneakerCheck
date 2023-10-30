using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace SneakerCheck.Data;

public class SneakerCheckDbContext : DbContext
{
    public const string ConnectionStringName = "SneakerCheck";

    public static void Configure(
        DbContextOptionsBuilder optionsBuilder,
        IConfiguration configuration,
        Assembly? migrationsAssembly = null)
    {
        optionsBuilder.UseNpgsql(configuration.GetConnectionString(ConnectionStringName), builder =>
        {
            if (migrationsAssembly is not null) builder.MigrationsAssembly(migrationsAssembly.GetName().ToString());
        });
        optionsBuilder.EnableSensitiveDataLogging(false);
        optionsBuilder.UseSnakeCaseNamingConvention();
    }

    public SneakerCheckDbContext(DbContextOptions<SneakerCheckDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(SneakerCheckDbContext).Assembly);
    }
}