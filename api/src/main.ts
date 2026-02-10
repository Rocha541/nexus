import { apiReference } from '@scalar/nestjs-api-reference';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
    { snapshot: true },
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nexus API')
    .setDescription('API documentation for Nexus')
    .setVersion('1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  app.use(
    '/reference',
    apiReference({
      content: swaggerDocument,
      withFastify: true,
    }),
  );
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
