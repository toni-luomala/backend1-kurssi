/*
Nest-sovellus voi toimia mikropalvelun asiakasovelluksena.
Client-olio luodaan Clientproxy-luokasta sovelluksen
servicessä (AppService).

Tämä asiakassovellus voisi olla itsekin mikropalvelu, joka 
esim. jatkokäsittelisi saamaansa dataa ja välittäisi sen
edelleen gatewaylle, joka välittäisi sen frontendiin.
Nyt vastaanotettu data näkyy ainoastaan kontrollerissa
määritellyssä osoitteessa http://localhost:3000/next-launch
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
