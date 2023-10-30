using SneakerCheck.Core;
using SneakerCheck.Data;

var builder = WebApplication.CreateBuilder(args);

var services = builder.Services;
{
    services.AddCore(builder.Configuration);
    services.AddData(builder.Configuration);
    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddSwaggerGen();
}

var app = builder.Build();
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapControllers();
}

app.Run();