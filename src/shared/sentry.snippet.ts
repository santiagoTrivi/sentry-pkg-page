export const sentrySnippet = {
  simple_module: `
    import { SentryModule } from "@sentry-pkg/pkg";
    import { Module } from "@nestjs/common";

    @Module({
      imports: [SentryModule.forRoot()],
    })
    export class AppModule {}`,

  full_module: `
    import { SentryModule } from "@sentry-pkg/pkg";
    import { Module } from "@nestjs/common";

    @Module({
    imports: [
        SentryModule.forRoot({
        expiresIn: "1m",
        databaseOptions: {
            user: "postgres",
            host: "localhost",
            database: "business",
            password: "postgres",
            port: 5432,
        },
      }),
     ],
    })
    export class AppModule {}
    `,

  sentryoptions: `
    interface SentryOptions {
        expiresIn?: string | number;
        databaseOptions?: DatabaseOptions;
    }
    `,

  databaseoptions: `
    interface DatabaseOptions {
      user: string; // El nombre de usuario de la base de datos PostgreSQL.
      host: string; // La dirección del host de la base de datos (ej. 'localhost').
      database: string; // El nombre de la base de datos a la que conectarse.
      password: string; // La contraseña del usuario de la base de datos.
      port: number; // El puerto de conexión de la base de datos PostgreSQL (ej. 5432).
    }
    `,

  example: `
    import { SentryModule } from "@sentry-pkg/pkg";

    @Module({
      imports: [
        SentryModule.forRoot({
          expiresIn: "5m", // El token durará 5 minutos
          databaseOptions: {
            user: "myuser",
            host: "localhost",
            database: "myapp",
            password: "mypassword",
            port: 5432,
          },
        }),
      ],
      // ... otros controladores y proveedores
    })
    export class AppModule {}
    `,
};
