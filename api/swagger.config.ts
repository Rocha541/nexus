import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

export function setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Fincheck')
        .setDescription(
            'Documentação da API da Fincheck, uma API para gerenciamento de financas pessoais'
        )
        .setVersion('1.0.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });

    app.use(
        '/reference',
        apiReference({
            content: document,
            theme: 'kepler',
        })
    );
}
