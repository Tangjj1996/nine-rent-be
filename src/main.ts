import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局前缀
  app.setGlobalPrefix('api');
  // 使用全局验证管道
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 注册全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 允许跨域
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
