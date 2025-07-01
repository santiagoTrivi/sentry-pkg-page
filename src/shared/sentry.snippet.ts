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
};
