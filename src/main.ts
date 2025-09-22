import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita o CORS para a futura aplicação Angular
  app.enableCors(); 
  
  // Habilita o ValidationPipe globalmente para validar DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Task API')
    .setDescription('API para gerenciamento de tarefas de usuários.')
    .setVersion('1.0')
    .addBearerAuth() // Adiciona o campo de autorização (Bearer Token) no Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // A documentação estará disponível em /api

  await app.listen(3000);
}
bootstrap();