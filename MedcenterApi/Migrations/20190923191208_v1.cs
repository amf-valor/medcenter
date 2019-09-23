using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MedcenterApi.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Services",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Price = table.Column<decimal>(nullable: false),
                    IsSchedulable = table.Column<bool>(nullable: false),
                    Type = table.Column<string>(nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "timestamp", nullable: false, defaultValueSql: "CURRENT_TIMESTAMP")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Services", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Login = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 1, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 29, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 28, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 27, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 26, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 25, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 24, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 23, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 22, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 21, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 20, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 19, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 18, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 17, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 30, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 16, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 14, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 13, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 12, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 11, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 10, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 9, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 8, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 7, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 6, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 5, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 4, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 3, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 2, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Services",
                columns: new[] { "Id", "IsSchedulable", "Name", "Price", "Type" },
                values: new object[] { 15, true, "acupuntura", 90.00m, "Specialty" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Login", "Password" },
                values: new object[] { 1, "admin.medcenter", "Medcenter@dmin" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Services");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
